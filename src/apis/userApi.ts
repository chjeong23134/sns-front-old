import Axios, {AxiosInstance} from "axios";

export interface UserType {
    readonly id: number;
    readonly email: string;
    readonly password: string;
    readonly name: string;
    readonly isDeleted: string;
    readonly createDate: Date;
    readonly updateDate: Date;
}

const axios: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/user",
});

export async function signIn(
    email: string,
    password: string,
): Promise<UserType> {
    return await axios
        .post("/sign-in", {
            email: email,
            password: password,
        })
        .then((res) => res.data);
}

export async function signUp(
    email: string,
    password: string,
    name: string,
): Promise<UserType> {
    return await axios
        .post("/sign-up", {
            email: email,
            password: password,
            name: name,
        })
        .then((res) => res.data);
}

export async function emailCheck(email: string): Promise<UserType> {
    return await axios.get("/email-check/" + email).then((res) => res.data);
}

export async function detail(id: number): Promise<UserType> {
    return axios.get("/detail/" + id).then((res) => res.data);
}

export function image(userId: number): string {
    return "http://localhost:8080/user/image/" + userId;
}
