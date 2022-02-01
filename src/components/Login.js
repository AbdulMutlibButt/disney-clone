import styled from "styled-components";

import React from "react";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/project realted images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url("/project realted images/login-background.jpg");
  position: absolute;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div``;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  width: 100%px;
`;

export default Login;
