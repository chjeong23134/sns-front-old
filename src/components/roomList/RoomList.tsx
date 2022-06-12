import "./RoomList.scss";

import { useEffect, useState } from "react";

import { roomApi } from "../../apis/roomApi";

import RoomItem from "../roomItem/RoomItem";

interface RoomType {
	id: number;
	createUserId: number;
	name: string;
	isDeleted: string;
	createDate: Date;
	updateDate: Date;
}

export default function RoomList() {
	const [ rooms, setRooms ] = useState<RoomType[]>([]);

	useEffect(() => {
		roomApi.list(1)
			.then(res => setRooms(res.data))
	}, []);

    return (
        <div className="room-list">
            <div className="list-board">
            	<button className="create-button">+</button>

				<div className="item-wrapper">
					{
						rooms?.map((room, id) => {
							return (
								<RoomItem
									key={ id }
									id={ room.id }
									createUserId={ room.createUserId }
									name={ room.name }
									isDeleted={ room.isDeleted }
									createDate={ room.createDate }
									updateDate={ room.updateDate }
								/>
							);
						})
					}
				</div>
			</div>
        </div>
    );
}
