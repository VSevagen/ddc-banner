import React, { ReactNode } from "react";

import BannerImg from "../BannerImg";
import Content from "../Content";

import styled from "styled-components";

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

interface BannerPropsType {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

const Banner = ({ title, subtitle, icon }: BannerPropsType) => {
  return (
    <StyleWrapper>
      <BannerImg />
      <Content icon={icon} title={title} subtitle={subtitle} />
    </StyleWrapper>
  );
};

export default Banner;
