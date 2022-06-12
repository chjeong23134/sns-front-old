import "./Main.scss";

import { Outlet } from "react-router-dom";

import RoomList from "../../components/roomList/RoomList";

export default function Main() {
	return (
		<div className="main">
			<div className="room-list-wrapper">
				<RoomList />
			</div>
			
			<div className="content-wrapper">
				<Outlet />
			</div>
		</div>
	);
}