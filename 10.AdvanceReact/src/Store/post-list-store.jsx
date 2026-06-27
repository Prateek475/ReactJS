import { createContext, useReducer } from "react";

// const DEFAULT_POST_LIST = [{
//   id : 1,
//   title : 'Going to Mumbai',
//   body : 'Hi friends I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
//   reactions: 2,
//   userId: 'user-10',
//   tags: ['vacations','Mumbai','Enjoy']
// },{
//   id : 2,
//   title : 'Passed Btech',
//   body : '4 saal ki masti k baad bhi ho gye h pass. Hard to believe.',
//   reactions: 15,
//   userId: 'user-12',
//   tags: ['Graduating','Unbelievable']
// }];

export const List = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {}
});

function reducerFn(currList,action) {
  let newList = currList;
  if(action.type == 'DEL_ITEM') {
    newList = currList.filter((item) => item.id != action.id);
  } else if(action.type == 'ADD_ITEM') {
    let obj = {
      id : action.id,
      title : action.title,
      body : action.body,
      reactions : action.reactions,
      userId : action.userId,
      tags : action.tags
    }
    newList = [...currList,obj];
  } else if(action.type == 'ADD_POSTS') {
    action.arr.map((obj) => {
      let newObj = {
        id : obj.id,
        title : obj.title,
        body : obj.body,
        reactions : obj.likes+obj.dislikes,
        userId : obj.userId,
        tags : obj.tags
      }
      newList = [...newList,newObj];
    })
  }
  return newList;
}

function PostListProvider({children}) {
  const [postList,dispatchList] = useReducer(reducerFn,[]);

  function addPost(title,body,reactions,userId,tags) {
    let action = {
      id : Date.now(),
      type : 'ADD_ITEM',
      title,
      body,
      reactions,
      userId,
      tags
    }
    dispatchList(action);
  }

  function addPosts(arr) {
    let action = {
      type : 'ADD_POSTS',
      arr : arr,
    }
    dispatchList(action);
  }

  function deletePost(id) {
    let obj = {
      type : 'DEL_ITEM',
      id : id
    }
    dispatchList(obj);
  }
  return (
    <List.Provider value={{
      postList:postList,
      addPost: addPost,
      deletePost:deletePost,
      addPosts : addPosts
    }}>
      {children}
    </List.Provider>
  );
}

export default PostListProvider;