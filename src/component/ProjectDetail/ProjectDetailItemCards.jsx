import {Col, Row} from "antd";
import '../../assets/FitImageInCard.css'
import CardDetails from "./Card/CardDetails.jsx";

const ProjectDetailItemCards = ({modal, modal2, modal3}) => {
    return(
        <Row gutter={[16, 16]}>
            <Col span={8}>
                <CardDetails modals={modal} modals2={modal2} modals3={modal3}/>
            </Col>
            <Col span={8}>
                <CardDetails modals={modal} modals2={modal2} modals3={modal3}/>
            </Col>
            <Col span={8}>
                <CardDetails modals={modal} modals2={modal2} modals3={modal3}/>
            </Col>
        </Row>
    )
}
export default ProjectDetailItemCards