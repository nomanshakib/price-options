import './App.css'
import NavBar from './components/NavBar/NavBar';
/* import DaisyNav from './components/DaisyNav/DaisyNav'; */

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className="text-4xl bg-red-700 text-center">
        Price Options
      </h1>
    </>
  );
}

export default App
