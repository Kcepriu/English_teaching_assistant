import { FC } from "react";
import { InputMessage } from "../InputMessage/InputMessage";
import { Messages } from "../Messages/Messages";
import styles from "./PageChat.module.css";

export const PageChat: FC = () => {
  return (
    <div className={styles.wrapPage}>
      <Messages />
      <InputMessage />
    </div>
  );
};
