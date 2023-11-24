import {Button, Descriptions, Modal} from "antd";
import {useState} from "react";

const ProjectDetailDesc = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const itemDetails = [
        {
            key: '1',
            label: 'Invoice Date',
            children: 'Zhou Maomao',
        },
        {
            key: '2',
            label: 'Shipping Line',
            children: '1810000000',
        },
        {
            key: '3',
            label: 'Port of Loading',
            children: 'Hangzhou, Zhejiang',
        },
        {
            key: '4',
            label: 'Port of Destination',
            children: 'empty',
        },
        {
            key: '5',
            label: 'Term of Delivery',
            children: 'empty',
        },
        {
            key: '6',
            label: 'Payment Condition',
            children: 'empty',
        },
        {
            key: '7',
            label: 'Production Time',
            children: 'empty',
        },
        {
            key: '8',
            label: 'Packaging',
            children: 'empty',
        },
    ];

    const items = [
        {
            key: '1',
            label: 'Project Name',
            children: 'Zhou Maomao',
        },
        {
            key: '2',
            label: 'Container',
            children: '1810000000',
        },
        {
            key: '3',
            label: 'PIC',
            children: 'Hangzhou, Zhejiang',
        },
    ];
    return(
        <dev>
            <Descriptions title="Project Info" items={items} />
            <Button onClick={showModal}>
                Shipping Detail
            </Button>
            <Modal width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Descriptions title="Shipping Detail" items={itemDetails}/>
            </Modal>
        </dev>
    )
}
export default ProjectDetailDesc