import { GithubFilled } from "@ant-design/icons";
import { Typography } from "antd";

const Footer = () => {
  return (
    <footer>
      <Typography.Link href="https://github.com/datoprak">
        <GithubFilled />
        Github
      </Typography.Link>
    </footer>
  );
};
export default Footer;
