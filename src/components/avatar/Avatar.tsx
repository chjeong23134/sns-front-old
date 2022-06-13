import "./Avatar.scss";

import {useEffect, useState} from "react";
import {detail, image} from "../../apis/userApi";

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
    id: number;
}

export default function Avatar(props: PropType) {
    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        detail(props.id).then((res) => setUser(res));
    }, []);

    return (
        <div className="avatar">
            <div className="image-wrapper">
                <img src={image(props.id)} />
            </div>

            <div className="name-wrapper">{user?.name}</div>
        </div>
    );
}
