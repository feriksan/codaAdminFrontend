import {Modal} from "antd";
import {useState} from "react";

const ModalComponent = ({children, title}) => {
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
    return(
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>
        )
}
export default ModalComponent