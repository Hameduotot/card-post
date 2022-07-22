import React from "react";
import Main from "../../components/Main/Main";
import Nav from "../../components/Nav/Nav";
import styles from "./layout.module.css";

function Layout({ data }) {
  return (
    <div className={styles.layout}>
      <Nav />
      <Main cards={data} />
    </div>
  );
}

export default Layout;
