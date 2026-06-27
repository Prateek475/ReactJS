import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";

function App() {
  let [selTab, setTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="App-container">
        <SideBar selTab = {selTab} setTab = {setTab}></SideBar>
        <div className="Content">
          <Header></Header>
          {selTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
