import React, { useState } from "react";
import {Avatar, Card, Col, Divider, Layout, List, Row, Space, Typography} from "antd";
import TopicMenu from "./component/topic/TopicMenu.jsx";
import "./App.css";
import NavBar from "./component/navbar/Navbar.jsx";
import SideBar from "./component/sidebar/Sidebar.jsx";
import Project from "./component/Project/Project.jsx";
import ProjectDetail from "./component/ProjectDetail/ProjectDetail.jsx";
import Dashboard from "./component/Dashboard/Dashboard.jsx";
function App() {
    const topics = ["Dashboard", "Project List", "Delivery"];
    const content = [
            <Dashboard/>,
        <div>
            <Project/>
        </div>,
        <div>
            <ProjectDetail/>
        </div>
    ]
    const [contentIndex, setContentIndex] = useState(0);
    const [selectedKey, setSelectedKey] = useState("0");
    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        setContentIndex(+key);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );
    return (
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    {content[contentIndex]}
                </Layout.Content>
            </Layout>
        </div>
    );
}
export default App;