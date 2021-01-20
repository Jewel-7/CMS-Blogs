import url from "../services/apiCall";
import BlogCard from "../component/BlogCard";
import styles from "../styles/index.module.css";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

export default function Land(props) {
  return (
    <div className={styles["home"]}>
      <Navigation />
      <hr className={styles["break"]} />
      {props.blogs.map((blog) => {
        return <BlogCard key={blog.uid} {...blog} />;
      })}
      <hr className={styles["break"]} />
      <Footer />
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
