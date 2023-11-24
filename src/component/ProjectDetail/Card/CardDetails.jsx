import {Avatar, Card} from "antd";
import {InfoCircleOutlined, PictureOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta.js";

const CardDetails = ({modals, modals2, modals3}) => {
    return(
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    className='imageClass'
                    alt="example"
                    src="https://lh3.googleusercontent.com/pw/ADCreHeoTxI4A7HEZaa6K6GInHN9D-Z3yCsjH8UyoPkccNXEr6ZV7976ZYsli_qshMVvQ3Q8ys3R0kZTpD-QHomxY_C9OFjVC6eDmMoB7NsfNHkjs3m6wj3yvZD9GA-nU5CdPmDGgSqiVV4nUcoF_F1DmOc=w475-h633-s-no-gm?authuser=0"
                />
            }
            actions={[
                <InfoCircleOutlined key="detail" onClick={modals} />,
                <UnorderedListOutlined key="progress" onClick={modals2}/>,
                <PictureOutlined key="list" onClick={modals3}/>,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="CRATE CHAIR OUTDOOR"
                description="This is the description"
            />
        </Card>
    )
}
export default CardDetails