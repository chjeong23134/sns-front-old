import axios from "axios"

interface RoomType {
	id: number;
	createUserId: number;
	name: string;
	isDeleted: string;
	createDate: Date;
	updateDate: Date;
}

interface ResponseType {
	data: RoomType[];
	status: string;
	message: string;
}

const ip = "http://localhost:8080/room"

function list(userId: number): Promise<ResponseType> {
	return axios({
		url: ip + "/list/" + userId
	}).then(res => res.data);
}

function image(id: number): string {
	return ip + "/image/" + id;
}

export const roomApi = {
	list,
	image
}