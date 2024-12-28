'use server'

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";


const now = new Date().toISOString();

export async function createNewDocument() {
  auth.protect();

  const { sessionClaims } = await auth();
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
