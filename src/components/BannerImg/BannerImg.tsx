import React from "react";

import DDC from "../../../assets/ddc.png";

import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (min-width: 320px) and (max-width: 768px) {
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
    width: 96%;
    margin: 2% 2% 0 2%;
  }
`;

const BannerImg = () => {
  return <Image src={DDC} />;
};

export default BannerImg;
