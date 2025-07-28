import { cookies } from "next/headers";

export async function getUser() {

    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (token) {
        return true;
    }
    return false;
}

getUser()
