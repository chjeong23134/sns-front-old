import Axios, {AxiosInstance} from "axios";

export interface CommentType {
    readonly id: number;
    readonly topicId: number;
    readonly createUserId: number;
    readonly content: string;
    readonly isDeleted: string;
    readonly createDate: Date;
    readonly updateDate: Date;
}

const axios: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/comment",
});

export async function commentList(topicId: number): Promise<CommentType[]> {
    return await axios.get("/list/" + topicId).then((res) => res.data);
}

export async function getLastComment(topicId: number): Promise<CommentType> {
    return await axios.get("/last-comment/" + topicId).then((res) => res.data);
}