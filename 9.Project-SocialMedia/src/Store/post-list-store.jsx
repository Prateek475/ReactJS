import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [{
  id : 1,
  title : 'Going to Mumbai',
  body : 'Hi friends I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
  reactions: 2,
  userId: 'user-10',
  tags: ['vacations','Mumbai','Enjoy']
},{
  id : 2,
  title : 'Passed Btech',
  body : '4 saal ki masti k baad bhi ho gye h pass. Hard to believe.',
  reactions: 15,
  userId: 'user-12',
  tags: ['Graduating','Unbelievable']
}];

export const List = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
});

function reducerFn(currList,action) {
  let newList = currList;
  if(action.type == 'DEL_ITEM') {
    newList = currList.filter((item) => item.id != action.id);
  } else {

  }
  return newList;
}

function PostListProvider({children}) {
  const [postList,dispatchList] = useReducer(reducerFn,DEFAULT_POST_LIST);
  function addPost() {

  }
  function deletePost(id) {
    console.log(id);
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
      deletePost:deletePost
    }}>
      {children}
    </List.Provider>
  );
}

export default PostListProvider;