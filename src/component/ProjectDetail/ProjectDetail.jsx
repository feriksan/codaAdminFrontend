import {Card, Col, Descriptions, Divider, Modal, Row, Table, Timeline, Image} from "antd";
import ProjectDetailItems from "./ProjectDetailItems.jsx";
import ProjectDetailDesc from "./ProjectDetailDesc.jsx";
import ProjectDetailItemCards from "./ProjectDetailItemCards.jsx";
import {useState} from "react";

const ProjectDetail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return(
        <>
            <Card bordered={false} style={{ width: 1000 }}>
                <ProjectDetailDesc/>
            </Card>
            <Divider/>
            <Card bordered={false} style={{ width: 1000 }}>
                <ProjectDetailItemCards modal={showModal} modal2={setIsModalOpen2} modal3={setIsModalOpen3}/>
            </Card>
            <Modal title="Detail Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Row>
                    <Col>
                        <ul>
                            Measurement (Inch)
                            <li>W (170)</li>
                            <li>D (50)</li>
                            <li>H (81)</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            Material
                            <li>Frame (Plywood)</li>
                            <li>Foam & Fabric (Standard Foam)</li>
                            <li>Cover (-)</li>
                            <li>Color (Brass)</li>
                        </ul>
                    </Col>
                </Row>
            </Modal>

            <Modal title="Timeline" open={isModalOpen2} onOk={() => setIsModalOpen2(false)} onCancel={() => setIsModalOpen2(false)}>
                <Timeline
                    items={[
                        {
                            children: 'Create a services site 2015-09-01',
                        },
                        {
                            children: 'Solve initial network problems 2015-09-01',
                        },
                        {
                            children: 'Technical testing 2015-09-01',
                        },
                        {
                            children: 'Network problems being solved 2015-09-01',
                        },
                    ]}
                />
            </Modal>

            <Modal width={650} title="List Gambar" open={isModalOpen3} onOk={() => setIsModalOpen3(false)} onCancel={() => setIsModalOpen3(false)}>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Image
                        width={200}
                        src="https://lh3.googleusercontent.com/pw/ADCreHctwQLfP6nSIZ_wlm2I_sI9wg3pZHOi44vi54d56x6JHf15ZYdL1Yu55PQq-TaSgGWH6RAgzSQuXZWyEpCE8BfrIeQihB8HYkkN3U2NuKptI0y9XMemmepnpN-eDcfNIiXxkJN_zSA5GNnum78Fi31fUQ=w475-h633-s-no-gm?authuser=0"
                    />
                    <Image
                        width={200}
                        src="https://lh3.googleusercontent.com/pw/ADCreHccvib8KAaVrsJ6G1QdauHlu9oDpLWSccCsYXRS30JtBx8wF-XYwvoJw98DyjQTWqUmQBAkXkVdRZFcPTOjLXlvM4bn7JtCTORDRhqgVqD1DwcAcHhI7ysyex0bsKViwFnlZZ2Lv91q24M5Zry3m4qx=w971-h633-s-no-gm?authuser=0"
                    />
                    <Image
                        width={200}
                        src="https://lh3.googleusercontent.com/pw/ADCreHctwQLfP6nSIZ_wlm2I_sI9wg3pZHOi44vi54d56x6JHf15ZYdL1Yu55PQq-TaSgGWH6RAgzSQuXZWyEpCE8BfrIeQihB8HYkkN3U2NuKptI0y9XMemmepnpN-eDcfNIiXxkJN_zSA5GNnum78Fi31fUQ=w475-h633-s-no-gm?authuser=0"
                    />
                    <Image
                        width={200}
                        src="https://lh3.googleusercontent.com/pw/ADCreHctwQLfP6nSIZ_wlm2I_sI9wg3pZHOi44vi54d56x6JHf15ZYdL1Yu55PQq-TaSgGWH6RAgzSQuXZWyEpCE8BfrIeQihB8HYkkN3U2NuKptI0y9XMemmepnpN-eDcfNIiXxkJN_zSA5GNnum78Fi31fUQ=w475-h633-s-no-gm?authuser=0"
                    />
                </Image.PreviewGroup>
            </Modal>
        </>
    )
}
export default ProjectDetail;