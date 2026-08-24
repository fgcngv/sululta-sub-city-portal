

import { prisma } from "@/lib/prisma";
import { MessagesTable } from "@/components/admin/messages/messages-table";
import Link from "next/link";

export default async function MessagesPage() {

  const messages =
    await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Contact Messages
        </h1>
        <p className="text-slate-500">
          Manage messages received from citizens.
        </p>
      </div>


      <MessagesTable
        messages={messages}
      />

    </div>
  );
}