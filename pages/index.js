import url from "../services/apiCall";
import BlogCard from "../component/BlogCard";
import styles from "../styles/Home.module.css";

export default function Land(props) {
  return (
    <div className={styles["blog"]}>
      {props.blogs.map((blog) => {
        return <BlogCard key={blog.uid} {...blog} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    let blogs = await url("jewel_blog");

    return {
      props: {
        blogs: blogs,
      },
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
