import axios from "axios";

interface UserType {
    id: number;
    email: string;
    password: string;
    name: string;
    isDeleted: string;
    createDate: Date;
    updateDate: Date;
}

interface ResponseListType {
    data: UserType[];
    status: string;
    message: string;
}

interface ResponseType {
    data: UserType;
    status: string;
    message: string;
}

const ip = "http://localhost:8080/user";

function signUp(email: string, password: string, name: string) {
    axios({
        url: ip + "/sign-up",
        method: "post",
        data: {
            email: email,
            password: password,
            name: name,
        },
    });
}

function emailCheck(email: string): Promise<ResponseType> {
    return axios({
        url: ip + "/email-check/" + email,
        method: "get",
    }).then((res) => res.data);
}

function signIn(email: string, password: string) {
    return axios({
        url: ip + "/sign-in",
        method: "post",
        data: {
            email: email,
            password: password,
        },
    }).then((res) => res.data);
}

function detail(id: number): Promise<ResponseType> {
	return axios({
		url: ip + "/detail/" + id,
		method: "get"
	}).then(res => res.data)
}

function image(userId: number): string {
	return ip + "/image/" + userId;
}

export const userApi = {
    signUp,
    emailCheck,
    signIn,
	detail,
	image
};
