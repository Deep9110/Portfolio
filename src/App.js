// import Spline from '@splinetool/react-spline';
import './App.css';
import Home from './components/home/Home';
// import Cart from './components/cart/Cart'
import Tech from './components/tech/Tech';
import Project from './components/projects/Project';
import Blog from './components/blog/Blog';


function App() {
  return (
    <div className="App">
      
      <Home/>
      <Tech/>
      
      <Project/>
      <Blog/>
    </div>
  );
}

export default App;
