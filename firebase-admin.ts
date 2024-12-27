import { initializeApp, getApps, App , getApp, cert } from "firebase-admin/app"

import { getFirestore } from "firebase-admin/firestore"


const serviceAccountConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
};

let app: App;

if(getApps().length === 0)
{
  app = initializeApp({
    credential: cert(serviceAccountConfig)
  });
}
else
{
  app = getApp();
}

const adminDb = getFirestore(app);
export {app as adminApp, adminDb}

