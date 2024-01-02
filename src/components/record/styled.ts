import styled from "styled-components";
import { THEME } from "../../style/theme";
import { ModalContainer } from "../../pages/landing/styled";

export const UserWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin: 35px 0px;
  height: 50px;
  div {
    font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.M : THEME.FONT_SIZE.XL)};
  }
`;

export const UserImg = styled.img`
  width: ${(props) => (props.theme.isMobile ? "70px" : "100px")};
  height: ${(props) => (props.theme.isMobile ? "70px" : "100px")};
  border-radius: 50%;
`;

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  width: 100%;
  height: 200px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  overflow-x: scroll;
`;

const WeightChartContainer = styled(RecordContainer)`
  height: 300px;
`;

export const ScoreRecordWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px 20px;
`;

const ScoreRecordUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    font-weight: ${THEME.FONT_WEIGHT.L};
    font-size: ${(props) => (props.theme.isMobile ? THEME.FONT_SIZE.XXXS : THEME.FONT_SIZE.XXS)};
  }
`;

interface IScoreColor {
  color: string;
}

const ScoreRecordLi = styled.li<IScoreColor>`
  background-color: ${(props) => props.color};
  width: ${(props) => (props.theme.isMobile ? "10px" : "13px")};
  height: ${(props) => (props.theme.isMobile ? "10px !important" : "13px")};
  border-radius: 3px;
  cursor: pointer;
  position: relative;

  &:hover .score-tooltip {
    display: block;
  }
`;

export const MissionContainer = styled(RecordContainer)`
  display: block;
  height: auto;
  min-height: 350px;
  padding-bottom: 30px;
`;

const MissionElement = styled.div`
  width: ${(props) => (props.theme.isMobile ? "300px" : "550px")};
  height: ${(props) => (props.theme.isMobile ? "110px" : "130px")};
  padding: 15px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  display: flex;
  cursor: pointer;
  gap: 5px;
  position: relative;

  button {
    margin-left: auto;
    margin-top: auto;
  }
`;

const MissionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MissionWrapper = styled.div`
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  width: 100%;
  height: 100%;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  padding: 20px 0px;
`;

const MissionScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 400px;
`;

const HoverBox = styled.div`
  z-index: 999;
  position: absolute;
  top: -85px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  text-align: center;
  font-size: ${THEME.FONT_SIZE.XXS};
  width: 150px;
  height: 80px;
  display: none;

  div {
    margin-top: 5px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: start;
  width: 100%;
  height: 40px;
  padding: 15px 0px 0px 15px;
`;

const GraphLine = styled.line`
  stroke: ${THEME.BACKGROUND_COLOR.GREEN_4};
  stroke-width: 3;
`;

const GraphCircle = styled.circle`
  fill: ${THEME.BACKGROUND_COLOR.GREEN_2};
  cursor: pointer;

  &:hover .hover-rect {
    visibility: visible;
    opacity: 1;
  }
`;

const GraphSubCircle = styled.circle`
  fill: transparent;
`;

const GraphLineWrapper = styled.g`
  z-index: 999;
  &:hover .hover-rect {
    visibility: visible;
    opacity: 1;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const HoverRect = styled.rect`
  z-index: 999;
  width: 40px;
  height: 20px;
  visibility: hidden;
  opacity: 0;
  fill: ${THEME.BACKGROUND_COLOR.GREEN_3};
  transition: 0.2s ease-in-out;
`;

const HoverText = styled.text`
  visibility: hidden;
  opacity: 0;
  fill: white;
  transition: 0.3s ease-in-out;
`;

const ChartWrapper = styled.div`
  width: 1000px;
  height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  padding: 10px;
`;

const MissionText = styled.div`
  font-size: ${THEME.FONT_SIZE.XS};
`;

const MissionModalContainer = styled(ModalContainer)``;

const MissionModalWrapper = styled.div`
  width: 500px;
  height: auto;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: ${THEME.BORDER_RADIUS.L};
`;

const MissionModalText = styled.div`
  font-size: ${THEME.FONT_SIZE.XS};
`;

const MissionModalBox = styled.div`
  width: 100%;
  height: 45%;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7px;
`;

const MiniBox = styled.div`
  width: 50%;
  height: 150px;
  background-color: ${THEME.BACKGROUND_COLOR.WHITE_2};
  border-radius: ${THEME.BORDER_RADIUS.M};
  padding: 20px;
`;

const MiniBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  gap: 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
`;

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

interface IChartLi {
  x: number;
}

const ChartLi = styled.li<IChartLi>`
  position: absolute;
  bottom: 30px;
  left: ${(props) => props.x + 40}px;
  width: 10px;
  height: 200px;
  border-radius: ${THEME.BORDER_RADIUS.M};
  background-color: ${THEME.BACKGROUND_COLOR.WHITE};
`;

const ChartSVGWrapper = styled.div<IChartLi>`
  position: absolute;
  width: 20px;
  height: 100%;
`;

const ChartText = styled.span`
  position: absolute;
  left: -12px;
  font-size: ${THEME.FONT_SIZE.XS};
  font-weight: ${THEME.FONT_WEIGHT.M};
`;

const SVGContainer = styled.div`
  height: 100%;
`;
const Polyline = styled.polyline`
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: dash 3s linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const Circle = styled.circle``;

const DonutChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AnimationCircle = styled.circle`
  animation: circle-fill-animation 2s ease-in-out;

  @keyframes circle-fill-animation {
    0% {
      stroke-dasharray: 0 ${2 * Math.PI * 90};
    }
  }
`;

const SVGText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${THEME.FONT_SIZE.XS};
  font-weight: ${THEME.FONT_WEIGHT.L};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const S = {
  ButtonWrapper,
  SVGText,
  AnimationCircle,
  DonutChartContainer,
  Polyline,
  SVGContainer,
  Circle,
  ChartText,
  ChartSVGWrapper,
  ChartLi,
  ChartContainer,
  WeightChartContainer,
  BoxContainer,
  MiniBoxWrapper,
  MiniBox,
  MissionModalBox,
  MissionModalText,
  MissionModalWrapper,
  MissionModalContainer,
  ChartWrapper,
  GraphSubCircle,
  HoverText,
  GraphLineWrapper,
  HoverRect,
  CircleWrapper,
  GraphLine,
  GraphCircle,
  TitleWrapper,
  HoverBox,
  MissionScrollWrapper,
  MissionWrapper,
  ScoreRecordLi,
  ScoreRecordWrapper,
  ScoreRecordUl,
  RecordContainer,
  UserWrapper,
  UserImg,
  MissionContainer,
  MissionElement,
  MissionText,
  MissionInfo,
};
