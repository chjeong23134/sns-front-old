import "./CommentItem.scss";

import Avatar from "../avatar/Avatar";

interface PropType {
    readonly id: number;
    readonly topicId: number;
    readonly createUserId: number;
    readonly content: string;
    readonly isDeleted: string;
    readonly createDate: Date;
    readonly updateDate: Date;
}

export default function CommentItem(props: PropType) {
    return (
        <div className="comment-item">
            <div className="comment-board">
                <div className="avatar-wrapper">
                    <Avatar id={props.createUserId} />
                </div>

                <div className="date-wrapper">
                    {props.createDate.toString()}
                </div>

                <div className="content-wrapper">{props.content}</div>
            </div>
        </div>
    );
}
