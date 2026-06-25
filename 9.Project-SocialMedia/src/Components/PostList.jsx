import Post from "./Post";
import { List } from "../Store/post-list-store";
import { useContext } from "react";

function PostList() {
  let {postList} = useContext(List);
   
  return (
    <>
      {postList.map((post) =><Post key ={post.id} post={post} ></Post>)}
    </>
  );
}

export default PostList;