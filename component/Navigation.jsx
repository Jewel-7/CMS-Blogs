import Link from "next/link";
import styles from "../styles/index.module.css";

function Navigation() {
  return (
    <nav className={styles["header-section"]}>
      <div className={styles["navigation"]}>
        <ul>
          <li className={styles["nav-link"]}>
            <Link href={`/`}>
              <h1 className={styles["nav-link"]}>Home</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
