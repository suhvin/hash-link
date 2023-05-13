import { extendedTheme, theme } from "@/style/theme";
import "@/style/theme/global.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={extendedTheme}>
        <Container>
          <MobileContainer>
            <Component {...pageProps} />
          </MobileContainer>
        </Container>
      </ChakraProvider>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: white;
  width: 100vw;
  // height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
`;

const MobileContainer = styled.div`
  width: 420px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`;
