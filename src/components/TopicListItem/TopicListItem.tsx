import "./TopicListItem.scss";

import Avatar from "../avatar/Avatar";

interface PropType {
    id: number;
    roomId: number;
    createUserId: number;
    title: string;
    content: string;
    isDeleted: string;
    createDate: Date;
    updateDate: Date;
}

export default function TopicListItem(props: PropType) {
	return (
		<div className="topic-list-item">
			<div className="item-board">
				<div className="header">
					<div className="avatar-wrapper">
						<Avatar id={props.createUserId} />
					</div>

					<div className="date-wrapper">
						{props.createDate.toString()}
					</div>
				</div>

				<div className="body">
					<div className="title-wrapper">
						{props.title}
					</div>

					<div className="content-wrapper">
						{props.content}
					</div>
				</div>
			</div>
		</div>
	)
}