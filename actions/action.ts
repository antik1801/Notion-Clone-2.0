'use server'

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";
import { clerkClient } from "@clerk/clerk-sdk-node";


const now = new Date().toISOString();

export async function createNewDocument() {
  auth.protect();

  const { sessionClaims } = await auth();
console.log("Session Claims:", sessionClaims);
  if(!sessionClaims)
  {
    throw new Error('Session claims are not provided!');
  }
  const userId = sessionClaims?.sub;

  if (!userId) {
    throw new Error("User ID is missing in session claims!");
  }

  // Fetch the user email from Clerk using the userId (sub)
  const user = await clerkClient.users.getUser(userId);
  const userEmail = user.emailAddresses[0]?.emailAddress;

  if (!userEmail) {
    throw new Error("User email is missing!");
  }
  if (sessionClaims) {
    const documentCollectionRef = adminDb.collection("documents");
    const docRef = await documentCollectionRef.add({
      title: "New Document",
    });
    await adminDb
      .collection("users")
      .doc(sessionClaims?.email)
      .collection("rooms")
      .doc(docRef.id)
      .set(
        {
          userId: sessionClaims?.email,
          role: "owner",
          createAt: now,
          roomId: docRef.id,
        },
        {
          merge: true,
        }
      );
    return { docId: docRef.id };
  } else {
    console.error("User is not authorized");
    return null;
  }
}
