import { PageChat } from "@/components/PageChat/PageChat";
import stylesGlobal from "@/stylesGlobal/globals.module.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${stylesGlobal.container} ${styles.main}`}>
      <PageChat />
    </main>
  );
}
