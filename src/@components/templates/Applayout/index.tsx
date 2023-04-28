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

const ApplayoutContainer = styled.main``;
