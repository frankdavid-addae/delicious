import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Logo, Nav } from "./custom-styled";
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}> delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
