import { MdDelete } from "react-icons/md";
import { List } from "../Store/post-list-store";
import { useContext } from "react";

function Post({ post}) {
  let {deletePost} = useContext(List);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary tagss" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post has been reacted by {post.reactions} peoples
        </div>
      </div>
    </div>
  );
}

export default Post;
