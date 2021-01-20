import Link from "next/link";
import styles from "../styles/index.module.css";
function BlogCard(props) {
  return (
    <div className={styles["index-border"]}>
      <img
        className={styles["index-image"]}
        src={props.image.url}
        alt={props.image.title}
      />

      <Link href={`/clubBlog/${props.uid}`}>
        <h1 className={styles["index-heading"]}>{props.heading}</h1>
      </Link>
    </div>
  );
}

export default BlogCard;
