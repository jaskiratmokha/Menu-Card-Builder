import './App.css';
import MenuHeader from './components/MenuHeader';
import MenuCuisines from './components/MenuCuisines';
function App() {
  return (
    <>
    <MenuHeader/>
    <MenuCuisines cousineTitle={["burger","fries","drinks"]}/>
    </>
  );
}

export default App;
