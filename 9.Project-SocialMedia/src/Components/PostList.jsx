import Post from "./Post";
import { List } from "../Store/post-list-store";
import { useContext } from "react";

function PostList() {
  let {postList,deletePost} = useContext(List);
   
  return (
    <>
      {postList.map((post) =><Post key ={post.id} post={post} del ={deletePost} ></Post>)}
    </>
  );
}

export default PostList;