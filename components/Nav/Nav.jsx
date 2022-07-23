import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
