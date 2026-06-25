import { List } from "../Store/post-list-store";
import { useContext,useRef } from "react";

function CreatePost() {
  let {addPost} = useContext(List);
  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    let user = userIdRef.current.value;
    userIdRef.current.value ="";
    let title = titleRef.current.value;
    titleRef.current.value ="";
    let body = bodyRef.current.value;
    bodyRef.current.value ="";
    let reactions = reactionsRef.current.value;
    reactionsRef.current.value ="";
    let tags = tagsRef.current.value.split(" ");
    tagsRef.current.value="";
    addPost(title,body,reactions,user,tags);
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="user-id"
          placeholder="Enter your user id..."
          ref={userIdRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="Title"
          placeholder="How are you feeling today..."
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows={4}
          className="form-control"
          id="Body"
          placeholder="Tell us more about it..."
          ref={bodyRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this..."
          ref={reactionsRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
          ref={tagsRef}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreatePost;
