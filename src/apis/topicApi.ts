import axios from "axios";

interface TopicType {
    id: number;
    roomId: number;
    createUserId: number;
    title: string;
    content: string;
    isDeleted: string;
    createDate: Date;
    updateDate: Date;
}

interface ResponseType {
    data: TopicType;
    status: string;
    message: string;
}

interface ResponseListType {
    data: TopicType[];
    status: string;
    message: string;
}

const ip = "http://localhost:8080/topic";

function write(
    roomId: number,
    createUserId: number,
    title: string,
    content: string,
): Promise<ResponseType> {
    return axios({
        url: ip + "/write",
        method: "post",
        data: {
            roomId: roomId,
            createUserId: createUserId,
            title: title,
            content: content,
        },
    }).then((res) => res.data);
}

function list(roomId: number): Promise<ResponseListType> {
    return axios({
        url: ip + "/list/" + roomId,
        method: "get",
    }).then((res) => res.data);
}

export const topicApi = {
    write,
    list,
};
