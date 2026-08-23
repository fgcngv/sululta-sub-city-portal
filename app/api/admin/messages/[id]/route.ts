

import { NextResponse } from "next/server";

import { currentUser } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";


export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {

  try {

    // Check logged in user
    const user = await currentUser();


    if (!user) {

      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );

    }



    // Check admin exists in database
    const dbUser =
      await prisma.user.findUnique({
        where: {
          clerkId: user.id,
        },
      });



    if (!dbUser) {

      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 403,
        }
      );

    }



    if (
      dbUser.role !== "ADMIN" &&
      dbUser.role !== "SUPER_ADMIN" &&
      dbUser.role !== "EDITOR"
    ) {

      return NextResponse.json(
        {
          error: "Forbidden",
        },
        {
          status: 403,
        }
      );

    }



    const { id } = await params;


    const body = await request.json();



    const allowedStatuses = [
      "NEW",
      "READ",
      "REPLIED",
      "ARCHIVED",
    ];



    if (
      !allowedStatuses.includes(
        body.status
      )
    ) {

      return NextResponse.json(
        {
          error: "Invalid status",
        },
        {
          status: 400,
        }
      );

    }



    const message =
      await prisma.contactMessage.update({

        where: {
          id,
        },

        data: {
          status: body.status,
        },

      });



    return NextResponse.json({
      success: true,
      message,
    });



  } catch (error) {

    console.error(
      "UPDATE MESSAGE ERROR:",
      error
    );


    return NextResponse.json(
      {
        error: "Failed to update message",
      },
      {
        status: 500,
      }
    );

  }

}