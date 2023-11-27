import React, { useState } from "react";
import {Avatar, Card, Col, Divider, Layout, List, Row, Space, Typography} from "antd";
import TopicMenu from "./component/topic/TopicMenu.jsx";
import "./App.css";
import NavBar from "./component/navbar/Navbar.jsx";
import SideBar from "./component/sidebar/Sidebar.jsx";
import Project from "./component/Project/Project.jsx";
import ProjectDetail from "./component/ProjectDetail/ProjectDetail.jsx";
import Dashboard from "./component/Dashboard/Dashboard.jsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import RouteHandler from "./routes/RouteHandler.jsx";
function App() {
    const topics = ["Dashboard", "Project List", "Delivery"];
    const link = ["/", "/project", "/delivery"];
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
            link={link}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );
    return (
        <BrowserRouter>
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    <RouteHandler/>
                </Layout.Content>
            </Layout>
        </div>
        </BrowserRouter>
    );
}
export default App;