import React from "react";

import styled from "styled-components";

const StyleWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  padding: 20px 0 20px 0;
`;

const Title = styled.span`
  font-size: 2rem;
  display: block;
  line-height: 1;
  right: 2px;
  bottom: 2px;
  color: #00b1a8;
  font-family: "Dancing Script", cursive;
  padding: 17px 30px 0 30px;
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    margin-top: 5%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.5rem;
    margin-top: 30%;
  }

  @media (min-width: 1025px) {
    font-size: 2vw;
    margin-top: 30%;
  }
`;

const Subtitle = styled.p`
  font-style: normal;
  line-height: 1.5;
  margin-left: 2%;
  margin-right: 2%;
  right: 1px;
  font-weight: 600;
  color: #00b1a8;
  font-family: "Harmonia Sans Std Regular", Arial, sans-serif;
  @media (max-width: 425px) {
    font-size: 0.6rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (min-width: 769px) {
    font-size: 1vw;
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 30%;
  right: 30%;
  top: 22%;
  background-color: white;

  @media (max-width: 425px) {
    top: -20%;
    border-radius: 50%;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 20%;
    top: -15%;
    left: 40%;
    right: 40%;
    border-radius: 50%;
  }

  @media (min-width: 769px) {
    top: 15%;

    .cakesvg {
      width: 50%;
      height: 50%;
    }
  }
`;

const Content = (props) => {
  const { icon, title, subtitle } = props;
  return (
    <StyleWrapper>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StyleWrapper>
  );
};

export default Content;
