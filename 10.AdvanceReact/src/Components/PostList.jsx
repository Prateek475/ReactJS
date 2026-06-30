import Post from "./Post";
import { List } from "../Store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WlcmMsg from "./WlcmMsg";
import Loading from "./Loading";

function PostList() {
  let {postList,addPosts} = useContext(List);
  useEffect(onPost,[]);
  let [fetching,setFetch] = useState(false);

  function onPost() {
    setFetch(true);
    if(postList.length == 0) {
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(obj => {
        addPosts(obj.posts);
        setFetch(false);
      }
      );
    }
  }
   
  return (
    <>
      {fetching && <Loading></Loading>}
      {!fetching && postList.map((post) =><Post key ={post.id} post={post} ></Post>)}
      {postList.length == 0 && !fetching && <WlcmMsg ></WlcmMsg>}
    </>
  );
}

export default PostList;