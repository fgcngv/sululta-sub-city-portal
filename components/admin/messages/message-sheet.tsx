

"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import {
  Mail,
  Archive,
  CheckCircle2,
} from "lucide-react";


type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED";
  createdAt: Date;
};


type Props = {
  message: ContactMessage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};


export function MessageSheet({
  message,
  open,
  onOpenChange,
}: Props) {


  if (!message) {
    return null;
  }


  async function updateStatus(
    status: ContactMessage["status"]
  ) {

    await fetch(
      `/api/admin/messages/${message?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      }
    );

    window.location.reload();
  }


  return (

    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >

      <SheetContent
        className="w-full overflow-y-auto sm:max-w-xl"
      >

        <SheetHeader>

          <SheetTitle>
            {message.subject}
          </SheetTitle>

          <SheetDescription>
            Received from citizen message form
          </SheetDescription>

        </SheetHeader>



        <div className="mt-8 space-y-6">


          <div className="rounded-xl border bg-slate-50 p-4">

            <p className="text-sm text-slate-500">
              Name
            </p>

            <p className="font-semibold">
              {message.name}
            </p>


            <p className="mt-4 text-sm text-slate-500">
              Email
            </p>

            <p className="font-medium">
              {message.email}
            </p>


            {message.phone && (

              <>
                <p className="mt-4 text-sm text-slate-500">
                  Phone
                </p>

                <p className="font-medium">
                  {message.phone}
                </p>
              </>

            )}

          </div>



          <div>

            <p className="mb-2 text-sm font-semibold text-slate-700">
              Message
            </p>


            <div className="rounded-xl border p-4 leading-7 text-slate-700">

              {message.message}

            </div>

          </div>



          <div className="flex flex-wrap gap-3">


            {message.status === "NEW" && (

              <Button
                onClick={() =>
                  updateStatus("READ")
                }
              >

                <CheckCircle2 className="mr-2 size-4" />

                Mark as read

              </Button>

            )}



            <Button
              variant="outline"
            >

              <a
                href={`mailto:${message.email}`}
              >

                <Mail className="mr-2 size-4" />

                Reply

              </a>

            </Button>



            {message.status !== "ARCHIVED" && (

              <Button
                variant="outline"
                onClick={() =>
                  updateStatus("ARCHIVED")
                }
              >

                <Archive className="mr-2 size-4" />

                Archive

              </Button>

            )}


          </div>


        </div>


      </SheetContent>

    </Sheet>

  );
}