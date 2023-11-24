import React from 'react';
import { Table,} from 'antd';

const ProjectTable = ({columns, data}) => {return(<Table columns={columns} dataSource={data} />)};
export default ProjectTable;