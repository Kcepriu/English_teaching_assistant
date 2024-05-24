import { FC, ReactNode } from "react";
import styles from "./MainPage.module.css";

interface IProps {
  children: ReactNode;
}

export const MainPage: FC<IProps> = ({ children }) => {
  return <main className={styles.mainPage}>{children}</main>;
};
