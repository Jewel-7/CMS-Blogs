import EachCard from "../../component/Card";
import url from "../../services/apiCall";
import Navigation from "../../component/Navigation";
import styles from "../../styles/blog.module.css";
import Footer from "../../component/Footer";
function profile(props) {
  return (
    <div className={styles["blog"]}>
      <Navigation />
      <EachCard {...props.blog} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    let blog = await url("jewel_blog", context.params.id);

    return {
      props: {
        blog: blog,
      },
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getStaticPaths = async () => {
  try {
    let blogs = await url("jewel_blog");

    let paths = blogs.map((blog) => {
      return {
        params: {
          id: `${blog.uid}`,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default profile;
