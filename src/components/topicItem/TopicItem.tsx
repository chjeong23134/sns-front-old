import "./TopicItem.scss";

import {useEffect, useState} from "react";
import {getLastComment, CommentType} from "../../apis/commentApi";

import Avatar from "../avatar/Avatar";
import CommentItem from "../commentItem/CommentItem";

interface PropType {
    readonly id: number;
    readonly roomId: number;
    readonly createUserId: number;
    readonly title: string;
    readonly content: string;
    readonly isDeleted: string;
    readonly createDate: Date;
    readonly updateDate: Date;
}

export default function TopicItem(props: PropType) {
    const [lastComment, setLastComment] = useState<CommentType>();

    useEffect(() => {
        getLastComment(props.id).then((res) => setLastComment(res));
    }, []);

    return (
        <div className="topic-item">
            <div className="topic-board">
                <div className="header">
                    <div className="avatar-wrapper">
                        <Avatar id={props.createUserId} />
                    </div>

                    <div className="date-wrapper">
                        {props.createDate.toString()}
                    </div>
                </div>

                <div className="body">
                    <div className="title-wrapper">{props.title}</div>

                    <div className="content-wrapper">{props.content}</div>
                </div>
                
                <div className="footer">
                    <div className="comment-item-">
                        {
                            lastComment ? (
                                <CommentItem 
                                    id={lastComment.id}
                                    topicId={lastComment.topicId}
                                    createUserId={lastComment.createUserId}
                                    content={lastComment.content}
                                    isDeleted={lastComment.isDeleted}
                                    createDate={lastComment.createDate}
                                    updateDate={lastComment.updateDate}
                                />
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
