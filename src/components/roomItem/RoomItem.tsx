import { roomApi } from "../../apis/roomApi";
import "./RoomItem.scss";

interface PropType {
	id: number;
	createUserId: number;
	name: string;
	isDeleted: string;
	createDate: Date;
	updateDate: Date;
}

export default function RoomItem(props: PropType) {
	return (
		<div className="room-item">
			<div className="item-board">
				<img className="image" src={ roomApi.image(props.id) } />
				
				<div className="content">{ props.name }</div>
			</div>
		</div>
	);
}