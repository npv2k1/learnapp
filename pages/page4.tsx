import { Button } from "antd";
import { getAdminLayout } from "../components/Layout";

const SomePage = () => {
  return (
    <div>
      <Button>Page 4</Button>
    </div>
  );
};

SomePage.getLayout = getAdminLayout;
export default SomePage;
