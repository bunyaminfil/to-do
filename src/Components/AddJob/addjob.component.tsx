import { useState } from "react";
import { Input, Select, Typography, Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { saveJob, getAllJobList } from "../../Utils/storage.util";
import "./addjob.css";

const AddjobComponent = () => {
  const { Option } = Select;
  const { Title } = Typography;

  const [priority, setPriority] = useState("");
  const [name, setName] = useState("");

  const onGetPriority = (value: any) => {
    setPriority(value);
  };

  const onGetJobName = (e: any) => {
    setName(e.target.value);
  };
  const data = {
    name,
    priority,
  };

  const onClick = () => {
    if (priority.length > 0 && name.length > 0) {
      saveJob(data);
      getAllJobList();
    }
  };
  return (
    <div className="addjob">
      <div className="content">
        <Title className="title" level={3}>
          Create New Job
        </Title>
        <Form className="form">
          <Form.Item className="formInput">
            <Title className="title" level={5}>
              Job Name
            </Title>
            <Input onChange={onGetJobName} placeholder="Basic usage" />
          </Form.Item>
          <Form.Item className="formSelect">
            <Title className="title" level={5}>
              Job Priority
            </Title>
            <Select defaultValue="Choose" onChange={onGetPriority}>
              <Option value="Urgent">Urgent</Option>
              <Option value="Regular">Regular</Option>
              <Option value="Trivial">Trivial</Option>
            </Select>
          </Form.Item>
          <Form.Item className="formButton">
            <Title className="title" level={5}>
              Action
            </Title>
            <Button type="primary" icon={<PlusOutlined />} onClick={onClick}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddjobComponent;
