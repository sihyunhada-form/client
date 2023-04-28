import styled from "styled-components";
import Footer from "~/@components/organisms/Footer";
import Header from "~/@components/organisms/Header";
import { LayoutProp } from "~/@interfaces";

export const Applayout = ({ children }: LayoutProp) => {
  return (
    <ApplayoutContainer>
      <Header />
      {children}
      <Footer />
    </ApplayoutContainer>
  );
};

const ApplayoutContainer = styled.div`
  max-width: 460px;
  min-width: 360px;
  margin: 0 auto;
  padding: 16px;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  overflow: scroll;
  height: 100vh;
`;
