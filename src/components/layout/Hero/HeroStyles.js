import styled, { css } from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const Here = styled(FaMapMarkerAlt)`
  width: 25px;
  height: 25px;
  color: red;
`;

const arrowButtons = css`
  width: 30px;
  height: 30px;
  color: var(--mainClr);
  cursor: pointer;
  background-color: var(--darkClr);
  border-radius: 50%;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  @media (min-width: 600px) {
    width: 50px;
    height: 50px;
  }
  &:hover {
    background-color: var(--ctaClr);
    transform: scale(0.95);
  }
`;

export const Next = styled(IoArrowForward)`
  ${arrowButtons};
`;

export const Prev = styled(IoArrowBack)`
  ${arrowButtons};
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
`;

export const HeroSlider = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
`;

export const HeroSlide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.5s linear;
  z-index: 100;
  position: relative;
`;

export const HeroInfo = styled.div`
  position: absolute;
  width: 70%;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--lightClr);
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroImage = styled.img`
  width: 100%;
  vertical-align: top;
  /* height: auto; */
`;

export const SlideButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 100;
`;
