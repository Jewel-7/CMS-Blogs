import Link from "next/link";
function BlogCard(props) {
  //   let { heading, image, content, uid } = props;
  return (
    <div>
      <img src={props.image.url} alt={props.image.title} />

      <Link href={`/clubBlog/${props.uid}`}>
        <h1>{props.heading}</h1>
      </Link>

      <p>{props.content}</p>
    </div>
  );
}

export default BlogCard;
