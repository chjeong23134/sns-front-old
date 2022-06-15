import "./CommentList.scss";

import { useEffect, useState } from "react";

import { commentList, CommentType } from "../../apis/commentApi";
import CommentItem from "../commentItem/CommentItem";

export default function CommentList() {
	const [ comments, setComments ] = useState<CommentType[]>();

	useEffect(() => {
		commentList(1).then(res => setComments(res));
	}, []);

	return (
		<div className="comment-list">
			<div className="list-board">
				{
					comments?.map((comment, id) => {
						return (
							<CommentItem
								key={id}
								id={comment.id}
								topicId={comment.topicId}
								createUserId={comment.createUserId}
								content={comment.content}
								isDeleted={comment.isDeleted}
								createDate={comment.createDate}
								updateDate={comment.updateDate}
							/>
						);
					})
				}
			</div>
		</div>
	)
}