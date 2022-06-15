import Axios, {AxiosInstance} from "axios";

export interface TopicType {
    readonly id: number;
    readonly roomId: number;
    readonly createUserId: number;
    readonly title: string;
    readonly content: string;
    readonly isDeleted: string;
    readonly createDate: Date;
    readonly updateDate: Date;
}

const axios: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/topic",
});

export async function topicWrite(
    roomId: number,
    createUserId: number,
    title: string,
    content: string,
): Promise<TopicType> {
    return await axios
        .post("/write", {
            roomId: roomId,
            createUserId: createUserId,
            title: title,
            content: content,
        })
        .then((res) => res.data);
}

export async function topicList(roomId: number): Promise<TopicType[]> {
    return await axios.get("/list/" + roomId).then((res) => res.data);
}
