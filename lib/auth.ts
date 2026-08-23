// import { auth,currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// import { prisma } from "@/lib/prisma";


// export async function getCurrentUser() {
//   const { userId } = await auth();

//   if (!userId) {
//     return null;
//   }

//   return prisma.user.findUnique({
//     where: {
//       clerkId: userId,
//     },
//   });
// }


// export async function requireAdmin() {
//   const { userId } = await auth();

//   if (!userId) {
//     redirect("/sign-in");
//   }

//   let user = await prisma.user.findUnique({
//     where: {
//       clerkId: userId,
//     },
//   });

//   if (!user) {
//     const clerkUser = await currentUser();

//     if (!clerkUser) {
//       redirect("/sign-in");
//     }

//     const email = clerkUser.emailAddresses[0]?.emailAddress;

//     if (!email) {
//       redirect("/sign-in");
//     }

//     user = await prisma.user.create({
//       data: {
//         clerkId: clerkUser.id,
//         email,
//         firstName: clerkUser.firstName,
//         lastName: clerkUser.lastName,
//         role: "EDITOR",
//       },
//     });
//   }

//   if (
//     user.role !== "ADMIN" &&
//     user.role !== "SUPER_ADMIN"
//   ) {
//     redirect("/");
//   }

//   return user;
// }





import {
  auth,
  currentUser,
} from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
  const { userId } = await auth();

  console.log("AUTH USER ID:", userId);

  if (!userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  console.log("PRISMA USER:", user);

  return user;
}

export async function requireAdmin() {
  console.log("========== REQUIRE ADMIN ==========");

  const { userId } = await auth();

  console.log("CLERK USER ID:", userId);

  if (!userId) {
    console.log("NO CLERK SESSION");
    redirect("/sign-in");
  }

  let user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  console.log("USER IN NEON:", user);

  if (!user) {
    console.log("USER NOT FOUND — GETTING CLERK USER");

    const clerkUser = await currentUser();

    console.log("CLERK USER:", clerkUser);

    if (!clerkUser) {
      console.log("CLERK CURRENT USER IS NULL");
      redirect("/sign-in");
    }

    const email =
      clerkUser.emailAddresses[0]?.emailAddress;

    console.log("CLERK EMAIL:", email);

    if (!email) {
      throw new Error(
        "Clerk user has no email address"
      );
    }

    try {
      user = await prisma.user.create({
        data: {
          clerkId: clerkUser.id,
          email,
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          role: "EDITOR",
        },
      });

      console.log(
        "USER SUCCESSFULLY CREATED IN NEON:",
        user
      );
    } catch (error) {
      console.error(
        "FAILED TO CREATE USER IN NEON:",
        error
      );

      throw error;
    }
  }

  console.log("FINAL USER:", user);

  if (
    user.role !== "ADMIN" &&
    user.role !== "SUPER_ADMIN"
  ) {
    console.log(
      "USER DOES NOT HAVE ADMIN ROLE:",
      user.role
    );

    redirect("/");
  }

  return user;
}