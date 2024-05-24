import { FC } from "react";
import styles from "./HeaderPage.module.css";
import stylesGlobal from "@/stylesGlobal/globals.module.css";

export const HeaderPage: FC = () => {
  return (
    <header className={styles.wrapHeader}>
      <div className={stylesGlobal.container}>
        <h2 className={styles.title}>English teaching assistant</h2>
      </div>
    </header>
  );
};
