import EachCard from "../../component/Card";
import url from "../../services/apiCall";

function profile(props) {
  return (
    <div>
      <EachCard {...props.blog} />
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
  } catch (errpr) {
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
