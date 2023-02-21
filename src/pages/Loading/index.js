import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  transform: translateZ(0);
  z-index: 3000;
  overflow: hidden;
`;

const Content = styled.div`
  text-align: center;
`;

const Video = styled.video`
  width: 200px;
  height: 200px;
  visibility: visible;
`;

const Text = styled.div`
  position: relative;
  top: -20px;
`;

const Head = styled.div`
  margin-bottom: 8px;
  max-width: 300px;
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 16px;
`;

const Paragraph = styled.div`
  max-width: 300px;
  color: ${({ theme }) => theme.textNormal};
  font-size: 16px;
  line-height: 20px;
`;

export default function Loading() {
  return (
    <Container>
      <Content>
        <Video autoPlay playsInline muted>
          <source src="/assets/loading/videowebm.webm" type="video/webm" />
          <source src="/assets/loading/videomp4.mp4" type="video/mp4" />
          <img alt="" src="/assets/loading/image.png" />
        </Video>
        <Text>
          <Head>Did You Know</Head>
          <Paragraph>
            No keyboard? Enable the Send Message button in Accessibility
            Settings to chat.
          </Paragraph>
        </Text>
      </Content>
    </Container>
  );
}
