import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../breakpoints";

const Category = () => {
  return (
    <List>
      <Link to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Link>
      <Link to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Link>
      <Link to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Link>
      <Link to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Link>
      
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  border: 1px solid #15a17a;
  background: #fff;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.9);

  svg {
    color: #3cb290;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  h4 {
    color: #313131;
    font-size: 0.7rem;
  }

  &:hover {
    background-color: #dde2e74e;
  }

  &.active {
    background: linear-gradient(35deg, #313121, #3cb290);

    svg {
      color: #fff;
    }

    h4 {
      color: #fff;
    }
  }
  @media ${device.laptop} {
    margin-left: 0;
    width: 5rem;
    height: 5rem;
    margin-right: 1.2rem;
  svg {
    font-size: 1.7rem;
    margin-top: 5px;
  }
  
  @media ${device.mobileL} {
    margin-left: 0;
    width: 4.3rem;
    height: 4rem;
    margin-right: 0.7rem;

    svg {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 0.6rem;
    }
  }

  @media ${device.mobileM} {
    margin-left: 0;
    width: 4.3rem;
    height: 4rem;
    margin-right: 0.3rem;

    svg {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 0.6rem;
    }
  }
`;

export default Category;
