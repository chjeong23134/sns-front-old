import "./RoomItem.scss";

import { roomImage } from "../../apis/roomApi";

interface PropType {
	readonly id: number;
	readonly createUserId: number;
	readonly name: string;
	readonly isDeleted: string;
	readonly createDate: Date;
	readonly updateDate: Date;
}

export default function RoomItem(props: PropType) {
	return (
		<div className="room-item">
			<div className="item-board">
				<img className="image" src={ roomImage(props.id) } />
				
				<div className="content">{ props.name }</div>
			</div>
		</div>
	);
}