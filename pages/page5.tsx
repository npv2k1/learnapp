import { Alert, Button, Form, Layout, Select } from "antd";
import { useState } from "react";
import { getAdminLayout } from "../components/Layout";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const SomePage = () => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>("");

  const handleForm = (values) => {
    // case1
    if (
      values["nguon_von"] === "Nhiều" &&
      values["thoi_gian_dau_tu"] === "Dài hạn" &&
      values["muc_dich_dau_tu"] === "Kiếm lợi nhuận sau thời hạn" &&
      values["chien_luoc_dau_tu"] === "An toàn" &&
      values["loi_nhuan"] === "Cao"
    ) {
      setResult("Mua và nắm giữ");
      return;
    }
    // case2
    if (
      values["nguon_von"] === "Ít" &&
      values["thoi_gian_dau_tu"] === "Ngắn hạn" &&
      values["muc_dich_dau_tu"] === "Kiếm tiền nhanh chóng" &&
      values["chien_luoc_dau_tu"] === "Mạo hiểm" &&
      values["loi_nhuan"] === "Cao"
    ) {
      setResult("Đầu tư lướt sóng");
      return;
    }
    // case3
    if (
      values["nguon_von"] === "Nhiều" &&
      values["thoi_gian_dau_tu"] === "Ngắn hạn" &&
      values["muc_dich_dau_tu"] === "Kiếm tiền nhanh chóng" &&
      values["chien_luoc_dau_tu"] === "An toàn" &&
      values["loi_nhuan"] === "Thấp"
    ) {
      setResult("Mua, xấy dựng và bán");
      return;
    }
    //case4
    if (
      values["nguon_von"] === "Nhiều" &&
      values["thoi_gian_dau_tu"] === "Trung hạn" &&
      values["muc_dich_dau_tu"] === "Tạo thu nhập hằng tháng" &&
      values["chien_luoc_dau_tu"] === "An toàn" &&
      values["loi_nhuan"] === "Cao"
    ) {
      setResult("Mua, xấy dựng và cho thuê");
      return;
    }
    // case5
    if (
      values["nguon_von"] === "Ít" &&
      values["thoi_gian_dau_tu"] === "Ngắn hạn" &&
      values["muc_dich_dau_tu"] === "Kiếm tiền nhanh chóng" &&
      values["chien_luoc_dau_tu"] === "An toàn" &&
      values["loi_nhuan"] === "Thấp"
    ) {
      setResult("Mua nhà cũ giá rẻ, cải tạo lại và bán giá cao");
      return;
    }

    // case6
    if (
      values["nguon_von"] === "Ít" &&
      values["thoi_gian_dau_tu"] === "Trung hạn" &&
      values["muc_dich_dau_tu"] === "Tạo thu nhập hằng tháng" &&
      values["chien_luoc_dau_tu"] === "An toàn" &&
      values["loi_nhuan"] === "Cao"
    ) {
      setResult("Mua nhà cũ giá rẻ, cải tạo lại và cho thuê");
      return;
    }
    // case7
    if (
      values["nguon_von"] === "Ít" &&
      values["thoi_gian_dau_tu"] === "Dài hạn" &&
      values["muc_dich_dau_tu"] === "Tạo thu nhập hằng tháng" &&
      values["chien_luoc_dau_tu"] === "An toàn" &&
      values["loi_nhuan"] === "Cao"
    ) {
      setResult("Thuê và cho thuê lại");
      return;
    }

    setResult(
      "Hiện tại chưa có hình thức đầu tư phù hợp với những nhu cầu mong muốn của bạn, vui lòng xem xét lại những nhu cầu mong muốn của bạn hoặc liên hệ với chuyên gia tư vấn để được tư vấn chi tiết hơn”"
    );
  };

  return (
    <Layout>
      <Form
        style={{ width: "500px" }}
        {...layout}
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleForm}
        autoComplete="off"
      >
        <Form.Item
          label="Nguồn vốn"
          name="nguon_von"
          rules={[
            {
              required: true,
              message: "Please select",
              whitespace: true,
            },
          ]}
        >
          <Select
            options={[
              {
                value: "Ít",
                label: "Ít",
              },
              {
                value: "Nhiều",
                label: "Nhiều",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Thời gian đầu tư"
          name="thoi_gian_dau_tu"
          rules={[
            {
              required: true,
              message: "Please select",
              whitespace: true,
            },
          ]}
        >
          <Select
            options={[
              {
                value: "Ngắn hạn",
                label: "Ngắn hạn",
              },
              {
                value: "Trung hạn",
                label: "Trung hạn",
              },
              {
                value: "Dài hạn",
                label: "Dài hạn",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Mục đích đầu tư"
          name="muc_dich_dau_tu"
          rules={[
            {
              required: true,
              message: "Please select",
              whitespace: true,
            },
          ]}
        >
          <Select
            options={[
              {
                value: "Kiếm lợi nhuận sau thời hạn",
                label: "Kiếm lợi nhuận sau thời hạn",
              },
              {
                value: "Kiếm tiền nhanh chóng",
                label: "Kiếm tiền nhanh chóng",
              },
              {
                value: "Tạo thu nhập hằng tháng",
                label: "Tạo thu nhập hằng tháng",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Chiến lược đầu tư"
          name="chien_luoc_dau_tu"
          rules={[
            {
              required: true,
              message: "Please select",
              whitespace: true,
            },
          ]}
        >
          <Select
            options={[
              {
                value: "An toàn",
                label: "An toàn",
              },
              {
                value: "Mạo hiểm",
                label: "Mạo hiểm",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Lợi nhuận"
          name="loi_nhuan"
          rules={[
            {
              required: true,
              message: "Please select",
              whitespace: true,
            },
          ]}
        >
          <Select
            options={[
              {
                value: "Cao",
                label: "Cao",
              },
              {
                value: "Thấp",
                label: "Thấp",
              },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {result && (
        <Alert message={result} description="" type="success" showIcon />
      )}
    </Layout>
  );
};

SomePage.getLayout = getAdminLayout;

export default SomePage;
