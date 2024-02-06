import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { device } from "../breakpoints";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={searchHandler}>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search recipes..."
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  position: relative;

  div {
    position: relative;
    width: 100%;
  }

  input {
    font-size: 1.5rem;
    color: #313131;
    padding: 0.7rem 1.5rem;
    border-radius: 10px;
    border: 1px solid #15a17a;
    outline: none;
    max-width: 500px;
    width: 100%;
    background: #dde2e74e;
    background: transparent;
    align-items: center;
    justify-content: center;
  }

  @media ${device.mobileL} {
    input {
      width: 90%;
      margin: 0 auto;
      padding: 0.4rem 1rem;
      font-size: 15px;

      &::placeholder {
        font-size: 15px;
      }
    }
  }
`;

export default Search;
