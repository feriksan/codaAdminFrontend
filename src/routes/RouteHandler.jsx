import {Route, Routes} from "react-router-dom";
import Dashboard from "../component/Dashboard/Dashboard.jsx";
import Project from "../component/Project/Project.jsx";
import ProjectDetail from "../component/ProjectDetail/ProjectDetail.jsx";
import React from "react";
import {App} from "antd";

const RouteHandler = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/projectId" element={<ProjectDetail/>} />
        </Routes>
    )
}
export default RouteHandler