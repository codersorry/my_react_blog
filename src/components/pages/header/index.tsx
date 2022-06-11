import React, { useState, useEffect } from "react";
import { Affix, Drawer, Row, Col, Menu, message, Modal, Tooltip } from "antd";
import type { MenuProps } from "antd";
import "./index.css";
import {
  HomeOutlined,
  SmileOutlined,
  FormOutlined,
  ShareAltOutlined,
  MessageOutlined,
  RocketOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ArticleTypeType } from "@/services/components/pages/header";
import { getArticleTypeList } from "@/services/components/pages/header";
import { useNavigate, Outlet } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Header: React.FC = () => {
  const [articleTypeList, setArticleTypeList] = useState([]);
  const mapArr = (data: ArticleTypeType[]) => {
    const arr: any = [];
    data.forEach((item: ArticleTypeType) => {
      arr.push(getItem(item.typeName, item.id));
    });
    setArticleTypeList(arr);
  };

  const items: MenuItem[] = [
    getItem("首页", "home", <HomeOutlined />),
    getItem("文章", "article", <FormOutlined />, articleTypeList),
    getItem("分享", "3", <ShareAltOutlined />),
    getItem("互动", "4", <SmileOutlined />),
    getItem("留言", "5", <MessageOutlined />),
    getItem("历程", "6", <RocketOutlined />),
    getItem("关于", "7", <UserOutlined />),
  ];
  useEffect(() => {
    getArticleTypeList().then((res) => {
      mapArr(res.data);
    });
  }, []);

  const navigate = useNavigate();
  //点击菜单跳转路由
  const menuClick = (e: any) => {
    debugger;
    if (e.key === "home") {
      navigate("/");
    } else if (e.keyPath[1] === "article") {
      navigate(`/article/${e.key}`);
    }
  };
  return (
    <div className="header">
      <Row justify="center">
        <Col xs={16} sm={16} md={0} lg={0} xl={0}>
          <span
            onClick={() => {}}
            className="header-logo"
            style={{
              textAlign: "center",
              display: "block",
              fontSize: "1.1rem",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Darry's Blog
          </span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={10} xl={9}>
          <Tooltip
            placement="bottom"
            title={<span>背景音乐控制(PS:字体缩放跟随音乐)</span>}
          >
            <span className="header-logo" id="yj">
              Darry
            </span>
          </Tooltip>
          <span className="header-txt">热爱前端开发，每天GET一个新知识</span>
        </Col>
        <Col className="memu-div" xs={4} sm={4} md={8} lg={8} xl={9}>
          <Menu
            mode="horizontal"
            onClick={menuClick}
            items={items}
            style={{ backgroundColor: "rgba(40,54,70,0)", color: "pink" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
