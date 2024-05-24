import { FC } from "react";
import Link from "next/link";
import { PiLinkedinLogo } from "react-icons/pi";
import styles from "./FooterPage.module.css";
import stylesGlobal from "@/stylesGlobal/globals.module.css";

export const FooterPage: FC = () => {
  return (
    <footer className={styles.wrapFooter}>
      <div className={stylesGlobal.container}>
        <div className={styles.wrapInformation}>
          <span className={styles.titleLink}>Development -</span>
          <Link
            className={styles.link}
            href="https://www.linkedin.com/in/serhii-kostiuchenko"
            target="_blank"
          >
            Serhii Kostiuchenko <PiLinkedinLogo size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
