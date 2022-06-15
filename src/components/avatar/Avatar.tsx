import "./Avatar.scss";

import {useEffect, useState} from "react";
import {userDetail, userImage, UserType} from "../../apis/userApi";

interface PropType {
    readonly id: number;
}

export default function Avatar(props: PropType) {
    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        userDetail(props.id).then((res) => setUser(res));
    }, []);

    return (
        <div className="avatar">
            <div className="image-wrapper">
                <img src={userImage(props.id)} />
            </div>

            <div className="name-wrapper">{user?.name}</div>
        </div>
    );
}
