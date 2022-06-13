import "./RoomList.scss";

import {useEffect, useState} from "react";

import {list, RoomType} from "../../apis/roomApi";

import RoomItem from "../roomItem/RoomItem";

export default function RoomList() {
    const [rooms, setRooms] = useState<RoomType[]>([]);

    useEffect(() => {
        list(1).then((res) => setRooms(res));
    }, []);

    return (
        <div className="room-list">
            <div className="list-board">
                <button className="create-button">+</button>

                <div className="item-wrapper">
                    {rooms?.map((room, id) => {
                        return (
                            <RoomItem
                                key={id}
                                id={room.id}
                                createUserId={room.createUserId}
                                name={room.name}
                                isDeleted={room.isDeleted}
                                createDate={room.createDate}
                                updateDate={room.updateDate}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
