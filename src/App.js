//import logo from './logo.svg';
import './App.css';
//import User from './user';
import Home from './containers/HomeContainer';
import Header  from './containers/Headercontainer'

function App() {
  const detail={
    name:"xys",
    Age:24,

  }

  return (
    <>
      <h1> redux tutorial</h1>
      <Header/>
      <Home/>
      </>
  );
}

export default App;
