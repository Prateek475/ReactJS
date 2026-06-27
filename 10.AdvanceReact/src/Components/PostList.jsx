import Post from "./Post";
import { List } from "../Store/post-list-store";
import { useContext } from "react";
import WlcmMsg from "./WlcmMsg";

function PostList() {
  let {postList,addPosts} = useContext(List);

  function onPost() {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(obj => addPosts(obj.posts));
  }
   
  return (
    <>
      {postList.map((post) =><Post key ={post.id} post={post} ></Post>)}
      {postList.length == 0 && <WlcmMsg onPost={onPost}></WlcmMsg>}
    </>
  );
}

export default PostList;