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
        token: "Algum token aleatorio",
        user: {
            email: "viniciuslps.cms@gmail.com",
            avatar_url: "https://github.com/viniciusleonel.png"
        }
    }
}

export async function recoverUserInfo() {
    await delay()

    return {
        token: "Algum token aleatorio",
        user: {
            email: "viniciuslps.cms@gmail.com",
            avatar_url: "https://github.com/viniciusleonel.png"
        }
    }
}