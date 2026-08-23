

// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const name =
//       typeof body.name === "string" ? body.name.trim() : "";

//     const email =
//       typeof body.email === "string"
//         ? body.email.trim().toLowerCase()
//         : "";

//     const phone =
//       typeof body.phone === "string"
//         ? body.phone.trim()
//         : "";

//     const subject =
//       typeof body.subject === "string"
//         ? body.subject.trim()
//         : "";

//     const message =
//       typeof body.message === "string"
//         ? body.message.trim()
//         : "";

//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Please complete all required fields.",
//         },
//         { status: 400 }
//       );
//     }

//     if (name.length > 100) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Name is too long.",
//         },
//         { status: 400 }
//       );
//     }

//     if (email.length > 200) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Email address is too long.",
//         },
//         { status: 400 }
//       );
//     }

//     if (subject.length > 200) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Subject is too long.",
//         },
//         { status: 400 }
//       );
//     }

//     if (message.length > 5000) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Message is too long.",
//         },
//         { status: 400 }
//       );
//     }

//     const emailPattern =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Please provide a valid email address.",
//         },
//         { status: 400 }
//       );
//     }

//     const contactMessage =
//       await prisma.contactMessage.create({
//         data: {
//           name,
//           email,
//           phone: phone || null,
//           subject,
//           message,
//         },
//       });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Your message has been sent successfully.",
//         id: contactMessage.id,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(
//       "CONTACT MESSAGE ERROR:",
//       error
//     );

//     return NextResponse.json(
//       {
//         success: false,
//         error:
//           "Unable to send your message right now. Please try again later.",
//       },
//       { status: 500 }
//     );
//   }
// }






import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const phone =
      typeof body.phone === "string"
        ? body.phone.trim()
        : "";

    const subject =
      typeof body.subject === "string"
        ? body.subject.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (email.length > 200) {
      return NextResponse.json(
        {
          success: false,
          error: "Email address is too long.",
        },
        { status: 400 }
      );
    }

    if (subject.length > 200) {
      return NextResponse.json(
        {
          success: false,
          error: "Subject is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          error: "Message is too long.",
        },
        { status: 400 }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // 1. Save the message in Neon first.
    const contactMessage =
      await prisma.contactMessage.create({
        data: {
          name,
          email,
          phone: phone || null,
          subject,
          message,
        },
      });

    // 2. Notify the administrator.
    try {
      await resend.emails.send({
        from:
          process.env.EMAIL_FROM ||
          "Sululta Administration <onboarding@resend.dev>",

        to: process.env.ADMIN_EMAIL!,

        replyTo: email,

        subject: `New Contact Message: ${subject}`,

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #0f172a;">
            <div style="padding: 24px; background: #0f172a; color: white; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; font-size: 22px;">
                New Contact Message
              </h1>
              <p style="margin: 8px 0 0; color: #cbd5e1;">
                Sululta Sub-City Administration
              </p>
            </div>

            <div style="padding: 24px; border: 1px solid #e2e8f0; border-top: 0; border-radius: 0 0 12px 12px;">
              <h2 style="font-size: 18px; margin-top: 0;">
                ${escapeHtml(subject)}
              </h2>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px;">
                    Name
                  </td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">
                    Email
                  </td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">
                    Phone
                  </td>
                  <td style="padding: 8px 0;">
                    ${escapeHtml(phone || "Not provided")}
                  </td>
                </tr>
              </table>

              <div style="margin-top: 24px;">
                <h3 style="font-size: 15px;">
                  Message
                </h3>

                <div style="padding: 16px; background: #f8fafc; border-radius: 10px; white-space: pre-wrap; line-height: 1.6;">
                  ${escapeHtml(message)}
                </div>
              </div>

              <p style="margin-top: 24px; color: #64748b; font-size: 13px;">
                Message ID: ${contactMessage.id}
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      // Do not delete the database record if email fails.
      console.error(
        "CONTACT EMAIL ERROR:",
        emailError
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
        id: contactMessage.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CONTACT MESSAGE ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send your message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
