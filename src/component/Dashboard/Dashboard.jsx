import {Avatar, Card, Col, Divider, List, Progress, Row, Space, Tag, Timeline, Typography} from "antd";
import {VictoryChart, VictoryLine, VictoryPie} from "victory";
import React from "react";
import ProjectTable from "../Project/ProjectTable.jsx";
import {SmileOutlined} from "@ant-design/icons";

const dataList = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const Dashboard = () => {
    let sampleData = [{ x: 1, y: 2, label: "one" },
        { x: 2, y: 3, label: "two" },
        { x: 3, y: 5, label: "three" }];
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

    const columns = [
        {
            title: 'Project Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Client',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Progress',
            key: 'progress',
            dataIndex: 'progress',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Detail</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            status: 'PO',
            progress: <Progress percent={30} />,
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            status: 'PO',
            progress: <Progress percent={90} />,
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            status: 'PO',
            progress: <Progress percent={10} />,
            tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            name: 'Joe Black',
            age: 32,
            status: 'PO',
            progress: <Progress percent={40} />,
            tags: ['cool', 'teacher'],
        },
        {
            key: '5',
            name: 'Joe Black',
            age: 32,
            status: 'PO',
            progress: <Progress percent={100} />,
            tags: ['cool', 'teacher'],
        },
        {
            key: '6 ',
            name: 'Joe Black',
            age: 32,
            status: 'PO',
            progress: <Progress percent={61} />,
            tags: ['cool', 'teacher'],
        },
    ];

    return(
        <div>
            <Row gutter={12}>
                <Col>
                    <Card style={{ width: 300 }}>
                        <Row>
                            <Space size={50}>
                                <Avatar src={url} />
                                <p>Po Masuk</p>
                                <h3>10</h3>
                            </Space>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: 300 }}>
                        <Row>
                            <Space size={50} >
                                <Avatar src={url} />
                                <p>Production Start</p>
                                <h3>13</h3>
                            </Space>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: 300 }}>
                        <Row>
                            <Space size={50}>
                                <Avatar src={url} />
                                <p>Production Done</p>
                                <h3>11</h3>
                            </Space>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Divider plain></Divider>
            <Row gutter={[12, 16]}>
                <Col>
                    <Card style={{ width: 600 }}>
                        <Space>
                            <VictoryPie
                                padAngle={({ datum }) => datum.y}
                                innerRadius={100}
                                data={sampleData}
                            />
                            <List
                                dataSource={dataList}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Typography.Text>-</Typography.Text> {item}
                                    </List.Item>
                                )}
                            />
                        </Space>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: 460 }}>
                        <VictoryChart minDomain={{ y: 0 }}>
                            <VictoryLine data={sampleData}/>
                        </VictoryChart>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: 700 }}>
                        <ProjectTable data={data} columns={columns}/>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: 300 }}>
                        <h1>Progress</h1>
                        <Timeline
                            items={[
                                {
                                    color: 'green',
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    color: 'green',
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    color: 'red',
                                    children: (
                                        <>
                                            <p>Solve initial network problems 1</p>
                                            <p>Solve initial network problems 2</p>
                                            <p>Solve initial network problems 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    children: (
                                        <>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'gray',
                                    children: (
                                        <>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'gray',
                                    children: (
                                        <>
                                            <p>Technical testing 1</p>
                                            <p>Technical testing 2</p>
                                            <p>Technical testing 3 2015-09-01</p>
                                        </>
                                    ),
                                },
                                {
                                    color: '#00CCFF',
                                    dot: <SmileOutlined />,
                                    children: <p>Custom color testing</p>,
                                },
                            ]}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Dashboard