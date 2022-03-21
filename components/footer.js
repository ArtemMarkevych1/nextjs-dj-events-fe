import React from "react";
import styles from "@/styles/Footer.module.css"
import Link from "next/link"

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy DJ Events 2021</p>
            <p>
                <Link href="/">About this project</Link>
            </p>
        </footer>
    );
}

export default Footer;
