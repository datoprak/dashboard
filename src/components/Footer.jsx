import { GithubFilled } from "@ant-design/icons";
import { Typography } from "antd";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Typography.Link
        href="https://github.com/datoprak"
        style={{ color: "black" }}
      >
        <div className="link-container">
          <GithubFilled />
          <span>Github</span>
        </div>
      </Typography.Link>
    </footer>
  );
};
export default Footer;
