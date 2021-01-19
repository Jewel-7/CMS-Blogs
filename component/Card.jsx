import Link from "next/link";

function EachCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.image.url} alt={props.image.title} />
      <h1>{props.heading}</h1>
      <p>{props.content}</p>

      {props.links.map((link) => {
        let id = link.related_links[0].uid;
        return (
          <div key={link._metadata.uid}>
            <Link href={`/clubBlog/${id}`}>
              <p>{link.link_tittle}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default EachCard;
