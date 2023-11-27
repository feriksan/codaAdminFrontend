import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
const TopicMenu = ({ topics, link, selectedKey, changeSelectedKey }) => {
    const styledTopics = [];
    topics.forEach((topic, index) =>
        styledTopics.push(
            <Menu.Item key={index} onClick={changeSelectedKey}>
                <Link to={link[index]}>{topic}</Link>
                {/*{topic}*/}
                {/*<a href={link[index]}>{topic}</a>*/}
            </Menu.Item>
        )
    );

    return (
        <Menu mode="inline" selectedKeys={[selectedKey]}>
            {styledTopics}
        </Menu>
    );
}
export default TopicMenu;