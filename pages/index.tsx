import { Button } from "antd";
import { useRouter } from "next/router";
import { getAdminLayout } from "../components/Layout";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push("/page1")}>Page 1</Button>
      <Button onClick={() => router.push("/page2")}>Page 2</Button>
      <Button onClick={() => router.push("/page3")}>Page 3</Button>
      <Button onClick={() => router.push("/page4")}>Page 4</Button>
      <Button onClick={() => router.push("/page5")}>Page 5</Button>
    </div>
  );
}
Home.getLayout = getAdminLayout;