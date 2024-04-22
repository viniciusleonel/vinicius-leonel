import { resolve } from "path";
import { LoginUserFormData } from "../vollmed/user/schemas";

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

type SignInRequestData = {
    email: string;
    password: string;
}

export async function signInRequest(data: SignInRequestData) {
    await delay()

    return{
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5pY2l1c2xwcy5jbXNAZ21haWwuY29tIiwiaXNzIjoiQVBJIFZvbGwubWVkIiwiZXhwIjoxNzEzNzEwOTY0fQ.bVTJfvcbhvWd7VR_bzZDBynRMgJ_sAW31oeUfiLMN9w",
        user: {
            email: "viniciuslps.cms@gmail.com",
            avatar_url: "https://github.com/viniciusleonel.png"
        }
    }
}

export async function recoverUserInfo() {
    await delay()

    return {
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5pY2l1c2xwcy5jbXNAZ21haWwuY29tIiwiaXNzIjoiQVBJIFZvbGwubWVkIiwiZXhwIjoxNzEzNzEwOTY0fQ.bVTJfvcbhvWd7VR_bzZDBynRMgJ_sAW31oeUfiLMN9w",
        user: {
            email: "viniciuslps.cms@gmail.com",
            avatar_url: "https://github.com/viniciusleonel.png"
        }
    }
}