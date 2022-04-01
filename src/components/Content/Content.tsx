import React from "react";

import styled from "styled-components";

/*
 * Content component
 * icon - ReactNode (containes cake svg)
 * title - string (Banner title)
 * subtitle - string (Banner subtitle)
 */
const Content = (props) => {
  const { icon, title, subtitle } = props;
  return (
    <StyleWrapper>
      <section className="icon">{icon}</section>
      <span className="title">{title}</span>
      <p className="subtitle">{subtitle}</p>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 20px 0 20px 0;

  .icon {
    min-width: 100px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;

    @media (min-width: 320px) and (max-width: 992px) {
      margin-top: -50px;
      margin-left: auto;
      margin-right: auto;
      max-width: 100px;
      border-radius: 50%;

      .cakesvg {
        max-width: 50px;
        max-height: 50px;
        width: 100%;
        height: 100%;
      }
    }
  }

  .title {
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

    @media (min-width: 993px) and (max-width: 1024px) {
      font-size: 24px;
    }

    @media (min-width: 1025px) {
      font-size: 30px;
    }
  }

  .subtitle {
    font-style: normal;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    color: #00b1a8;
    font-family: "Harmonia Sans Std Regular", Arial, sans-serif;

    @media (min-width: 320px) {
      font-size: 11px;
    }
  }
`;

export default Content;
