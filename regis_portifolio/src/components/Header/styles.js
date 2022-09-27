import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 72px;
  background-color: var(--grey-0);
  border-bottom: 2px solid var(--purple);

  li {
    text-decoration: none;
    list-style: none;
    color: var(--grey-3);
  }

  li:hover {
    color: var(--grey-2);
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin-right: 30px;
    cursor: pointer;
    font-size: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
`;
