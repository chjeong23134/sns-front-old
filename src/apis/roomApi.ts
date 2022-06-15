import Axios, {AxiosInstance} from "axios";

export interface RoomType {
    readonly id: number;
    readonly createUserId: number;
	readonly name: string;
    readonly isDeleted: string;
    readonly createDate: Date;
    readonly updateDate: Date;
}

const axios: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/room",
});

export async function roomList(userId: number): Promise<RoomType[]> {
	return await axios.get("/list/" + userId).then(res => res.data);
}

export function roomImage(id: number): string {
	return "http://localhost:8080/room/image/" + id;
}