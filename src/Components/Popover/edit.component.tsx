import { useState } from "react";
import { Popover, Select, Typography, Button, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { updateJob } from "../../Utils/storage.util";
import "./popover.css";
const { Title } = Typography;
const { Option } = Select;

type IProps = {
  name: string;
  priority: string;
};

export default function Edit({ name, priority }: IProps) {
  const [visible, setVisible] = useState(false);
  const [selectPriority, setSelectPriority] = useState(priority);
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onSave = () => {
    updateJob(name, selectPriority);
    setVisible(false);
  };
  const onGetPriority = (value: string) => {
    setSelectPriority(value);
  };
  return (
    <Popover
      content={
        <div className="popover-content">
          <Title level={4} className="popover-title">
            Job Edit
          </Title>
          <div className="job-name">
            <Title level={5}>Job Name</Title>
            <Input disabled value={name} />
          </div>
          <div className="job-priority">
            <Title level={5}>Job Priority</Title>
            <Select
              className="select"
              defaultValue={priority}
              onChange={onGetPriority}
            >
              <Option value="Urgent">Urgent</Option>
              <Option value="Regular">Regular</Option>
              <Option value="Trivial">Trivial</Option>
            </Select>
          </div>
          <div className="buttons">
            <Button className="cancel" onClick={onCancel}>
              Cancel
            </Button>
            <Button className="save" onClick={onSave}>
              Save
            </Button>
          </div>
        </div>
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button className="actionButtons" icon={<EditOutlined />} />
    </Popover>
  );
}
