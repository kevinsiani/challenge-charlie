import styled, { keyframes } from 'styled-components';

import { device } from './../../styles/devices';

export const Container = styled.div`
  width: 60%;
  @media ${device.small} {
    width: 90%;
  }
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  background: ${props => props.backgroundColor};
  overflow: hidden;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: ${props => props.animate? activeIn : activeOut} forwards 0.3s;

  div {
    width: 48%;

    img {
      height: 100%;
    }
  }

  div:first-child {
    @media ${device.small} {
      width: 30%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:last-child {
    @media ${device.small} {
      width: 66%;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const WeatherInfo = styled.div`
  width: 100% !important;

  h1 {
    margin-top: -15px;
    font-size: 25px;
    @media ${device.small} {
      font-size: 20px;
    }
  }

  h2 {
    margin-bottom: 30px;
    display: ${props => props.show ? 'block' : 'none'};
  }

  h3 {
    font-size: 20px;
    font-weight: 300;
    display: ${props => props.show ? 'block' : 'none'};
    @media ${device.small} {
      font-size: 15px;
    }
  }
`;

export const ToggleWrapper = styled.div`
  width: 100% !important;
  display: flex;
  justify-content: flex-end !important;
`;

export const ToggleButton = styled.div`
  width: 25px !important;
  height: 25px !important;
  display: flex;
  color: #666;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;



const activeIn = keyframes`
  0% {
    height: 15%;
  }
  100% {
    height: 45%;
  }
`;

const activeOut = keyframes`
  0% {
    height: 45%;
  }
  100% {
    height: 15%;
  }
`;