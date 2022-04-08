import { useState } from "react";
import { Popover, Typography, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { removeJob } from "../../Utils/storage.util";
import "./popover.css";

type IProps = {
  name: string;
};

const { Title } = Typography;
export default function Delete({ name }: IProps) {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onApprove = () => {
    removeJob(name);
    setVisible(false);
  };
  return (
    <Popover
      content={
        <div className="popover-delete-content">
          <Title level={4} className="popover-title">
            Are you sure?
          </Title>
          <div className="buttons">
            <Button className="cancel" onClick={onCancel}>
              Cancel
            </Button>
            <Button className="approve" onClick={onApprove}>
              Approve
            </Button>
          </div>
        </div>
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button className="actionButtons" icon={<DeleteOutlined />} />
    </Popover>
  );
}
