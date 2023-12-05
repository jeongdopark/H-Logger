import styled from "styled-components";
import { THEME } from "../../style/theme";

const Empty = () => {
  return <EmptyContainer>기록이 없습니다.</EmptyContainer>;
};
export default Empty;

const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${THEME.FONT_SIZE.XL};
  font-weight: ${THEME.FONT_WEIGHT.M};
`;
