import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";


type ClerkUserCreatedEvent = {
  type: "user.created";

  data: {
    id: string;

    email_addresses: Array<{
      email_address: string;
    }>;

    first_name: string | null;

    last_name: string | null;
  };
};


export async function POST(
  request: Request
) {
    console.log("🔥 Clerk webhook received");

  const payload = await request.text();

  const headerPayload = await headers();


  const svixHeaders = {
    "svix-id":
      headerPayload.get("svix-id")!,

    "svix-timestamp":
      headerPayload.get("svix-timestamp")!,

    "svix-signature":
      headerPayload.get("svix-signature")!,
  };


  const webhookSecret =
    process.env.CLERK_WEBHOOK_SECRET!;


  const wh =
    new Webhook(webhookSecret);


  let event: ClerkUserCreatedEvent;


  try {

    event =
      wh.verify(
        payload,
        svixHeaders
      ) as ClerkUserCreatedEvent;


  } catch(error) {

    return new NextResponse(
      "Invalid signature",
      {
        status: 400,
      }
    );

  }


  if(event.type === "user.created") {

    const user =
      event.data;


    const email =
      user.email_addresses[0]
        ?.email_address;


    if(!email){

      return NextResponse.json({
        success:false,
      });

    }


    await prisma.user.create({

      data: {

        clerkId:
          user.id,

        email,

        firstName:
          user.first_name,

        lastName:
          user.last_name,

        role:
          "EDITOR",

      },

    });

  }


  return NextResponse.json({
    success:true,
  });

}