import { useState, useEffect } from "react";
import { getAllJobList } from "../../Utils/storage.util";
import "./listjob.css";
import { Table, Space, Form, Typography } from "antd";
import EditPopover from "../Popover/edit.component";
import DeletePopover from "../Popover/delete.component";
const { Title } = Typography;

const ListjobComponent = (props: any) => {
  const [recordObj, setRecordObj] = useState({ name: "", priority: "" });
  const [jobList, setJobList] = useState([]);
  const handleDelete = (record: any) => {
    setRecordObj(record);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => text,
    },
    {
      title: "Priority",
      key: "priority",
      dataIndex: "priority",
      render: (priority: any) => priority,
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: object) => (
        <Space size="middle">
          <div onClick={() => handleDelete(record)}>
            <EditPopover name={recordObj.name} priority={recordObj.priority} />
            <DeletePopover name={recordObj.name} />
          </div>
        </Space>
      ),
    },
  ];

  const refreshLinks = () => {
    getAllJobList();
  };
  useEffect(() => {
    setJobList(getAllJobList());
    refreshLinks();
  }, [getAllJobList, jobList]);

  return (
    <div className="listjob">
      <div className="content">
        <Title className="title" level={3}>
          Job List
        </Title>
        <Form className="form">
          <Form.Item className="table">
            <Table columns={columns} dataSource={jobList} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ListjobComponent;
