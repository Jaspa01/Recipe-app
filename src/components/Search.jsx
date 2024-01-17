import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={searchHandler}>
      <div>
        {/* <FaSearch></FaSearch> */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
  }
  svg {
    top: 50px;
    margin-top: 3rem;
    left: 0%;
    transform: translate(100%, -50%);
    color: #494949;
    font-size: 3rem;
    cursor: pointer;
    positon: absolute;
  }
`;

export default Search;
