import React from "react";

import DDC from "../../../assets/ddc.png";

import styled from "styled-components";

const BannerImg = () => {
  return <Image src={DDC} />;
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (min-width: 320px) and (max-width: 992px) {
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
  }

  @media (min-width: 1024px) {
    width: 550px;
    height: 300px;
  }
`;

export default BannerImg;
