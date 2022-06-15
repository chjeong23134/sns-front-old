import "./TopicList.scss";

import {useEffect, useState} from "react";

import {topicList, TopicType} from "../../apis/topicApi";

import TopicItem from "../topicItem/TopicItem";

export default function TopicList() {
    const [topics, setTopics] = useState<TopicType[]>([]);

    useEffect(() => {
        topicList(1).then((res) => {
            setTopics(res);
        });
    }, []);

    return (
        <div className="topic-list">
            <div className="list-board">
                <div className="item-wrapper">
                    {topics?.map((topic, id) => {
                        return (
                            <TopicItem
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
