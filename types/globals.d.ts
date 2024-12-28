import { User } from "./types";

export {}

declare global {
    interface CustomJwtSessionClaims extends User{
        role: string;
        permissions: string[];
    }
}
