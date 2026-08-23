

"use client";

import { useState } from "react";
import { format } from "date-fns";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import { MessageSheet } from "./message-sheet";


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
  messages: ContactMessage[];
};


export function MessagesTable({
  messages,
}: Props) {

  const [selectedMessage, setSelectedMessage] =
    useState<ContactMessage | null>(null);


  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

        <Table>

          <TableHeader>
            <TableRow>

              <TableHead>
                Name
              </TableHead>

              <TableHead>
                Subject
              </TableHead>

              <TableHead>
                Email
              </TableHead>

              <TableHead>
                Status
              </TableHead>

              <TableHead>
                Received
              </TableHead>

            </TableRow>
          </TableHeader>


          <TableBody>

            {messages.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={5}
                  className="py-10 text-center text-slate-500"
                >
                  No messages found.
                </TableCell>

              </TableRow>

            ) : (

              messages.map((message) => (

                <TableRow
                  key={message.id}
                  className="cursor-pointer hover:bg-slate-50"
                  onClick={() =>
                    setSelectedMessage(message)
                  }
                >

                  <TableCell className="font-medium">
                    {message.name}
                  </TableCell>


                  <TableCell>
                    {message.subject}
                  </TableCell>


                  <TableCell>
                    {message.email}
                  </TableCell>


                  <TableCell>

                    <StatusBadge
                      status={message.status}
                    />

                  </TableCell>


                  <TableCell>
                    {format(
                      new Date(message.createdAt),
                      "MMM dd, yyyy"
                    )}
                  </TableCell>


                </TableRow>

              ))

            )}

          </TableBody>

        </Table>

      </div>


      <MessageSheet
        message={selectedMessage}
        open={!!selectedMessage}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedMessage(null);
          }
        }}
      />

    </>
  );
}



function StatusBadge({
  status,
}: {
  status:
    | "NEW"
    | "READ"
    | "REPLIED"
    | "ARCHIVED";
}) {

  const variants = {
    NEW: "default",
    READ: "secondary",
    REPLIED: "outline",
    ARCHIVED: "secondary",
  } as const;


  return (
    <Badge variant={variants[status]}>
      {status}
    </Badge>
  );
}