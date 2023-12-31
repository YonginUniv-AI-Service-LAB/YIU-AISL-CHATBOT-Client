import React, { Component } from "react";
import { Row, Col } from "antd";
import logo from "../../assets/images/yiu_logo_col.jpg";
import styles from "./footer.module.css";

import TextInput from "../TextInput/TextInput";

const Footer = () => {
  return (
    <Row
      className={styles.container}
      justify={"center"}
      style={{
        width: "100vw",
        alignContent: "center",
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <TextInput />
    </Row>
  );
};
export default Footer;
