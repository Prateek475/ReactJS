import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import CreatePost from './Components/CreatePost';

function App() {
  return (
    <div className='App-container'>
      <SideBar></SideBar>
      <div className='Content'>
        <Header></Header>
        <CreatePost></CreatePost>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App
