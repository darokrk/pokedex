import React from "react";

import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid black;
  border-radius: 3px;
`;

const NotFound = () => (
  <StyledWrapper>
    <h2>404 Not Found !?!!!!!!!!!!</h2>
  </StyledWrapper>
);

export default NotFound;
