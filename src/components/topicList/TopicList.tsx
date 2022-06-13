import "./TopicList.scss";

import { useEffect, useState } from "react";

import { list, TopicType } from "../../apis/topicApi";

import TopicListItem from "../TopicListItem/TopicListItem";

export default function TopicList() {
	const [ topics, setTopics ] = useState<TopicType[]>([]);

	useEffect(() => {
		list(1)
			.then(res => {
				setTopics(res);
			});
	}, []);

	return (
		<div className="topic-list">
			<div className="list-board">
				<div className="item-wrapper">
					{
						topics?.map((topic, id) => {
							return (
								<TopicListItem 
									key={id}
									id={topic.id}
									roomId={topic.roomId}
									createUserId={topic.createUserId}
									title={topic.title}
									content={topic.content}
									isDeleted={topic.isDeleted}
									createDate={topic.createDate}
									updateDate={topic.updateDate}
								/>
							)
						})
					}
				</div>
			</div>
		</div>
	);
}