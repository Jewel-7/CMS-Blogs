import Link from "next/link";
import styles from "../styles/blog.module.css";

function EachCard(props) {
  console.log(props);
  return (
    <div className={styles["blog-flex"]}>
      <div className={styles["blog-flex1"]}>
        <img
          className={styles["blog-image"]}
          src={props.image.url}
          alt={props.image.title}
        />
        <h1 className={styles["blog-heading"]}>{props.heading}</h1>
        <div>
          <h3 className={styles["blog-heading"]}>Author- {props.author}</h3>
          <h2 className={styles["blog-content-heading"]}>About the Club</h2>
          <p className={styles["blog-content"]}>{props.content}</p>
        </div>
      </div>
      <div className={styles["blog-flex2"]}>
        <h5 className={styles["blog-links-heading"]}>RELATED CLUBS</h5>
        {props.links.map((link) => {
          let id = link.related_links[0].uid;
          return (
            <div key={link._metadata.uid}>
              <Link href={`/clubBlog/${id}`}>
                <p className={styles["blog-links"]}>{link.link_tittle}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EachCard;
