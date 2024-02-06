import { BrowserRouter, Link } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import styled from 'styled-components';
import { PiBowlFoodLight } from "react-icons/pi";
import { device } from './breakpoints';
import "./App.css"

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Nav>
          <div style={{ top: "10px", left: "0px", display: "flex", alignItems: "center" }}>
            <Logo to={"/"} style={{ textDecoration: "none", textTransform: "capitalize" }}>jasperlicious</Logo>
            <PiBowlFoodLight style={{ color: "#C4E3DC", marginLeft: "3px" }} />
          </div>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none
  fontSize: "2.5rem"
  font-weight: 400;
  font-family: "Lobster-two", cursive;
  color: #C4E3DC;



@media ${device.laptopL} {
    font-size: 2.5rem;
    margin-top: 5px;
}
@media ${device.laptop} {
  font-size: 2.5rem;
}

@media ${device.mobileL} {
  font-size: 1.5rem;
}
`;

const Nav = styled.div`
  padding: 1rem 30px;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color:  #15A17A;
  background: linear-gradient(35deg, #15A17A, #313131);

  svg {
    font-size: 3.3rem;
  }
  
  @media ${device.laptopL} {
    svg {
      font-size: 3rem;
      margin-top: 5px;
    }  
}
  @media ${device.mobileL} {
    svg {
      font-size: 1.5rem;
      margin-top: 5px;
    }
  }
`;

export default App;
