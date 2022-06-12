import { useEffect, useState } from "react";
import { userApi } from "../../apis/userApi";
import "./Avatar.scss";

interface UserType {
    id: number;
    email: string;
    password: string;
    name: string;
    isDeleted: string;
    createDate: Date;
    updateDate: Date;
}

interface PropType {
	id: number
}

export default function Avatar(props: PropType) {
	const [ user, setUser ] = useState<UserType>();

	useEffect(() => {
		userApi.detail(props.id)
			.then(res => {
				setUser(res.data);
			})
	}, []);

	return (
		<div className="avatar">
			<div className="image-wrapper">
				<img src={userApi.image(props.id)} />
			</div>

			<div className="name-wrapper">
				{user?.name}
			</div>
		</div>
	);
}