import React from 'react';
import styled from 'styled-components';
// import Project from './Project';
import MapProject from './MapProject';
import Projects from './Projects';
// import Map from './Map';

const MainContainer = styled('div')<{ isOpen: boolean }>`
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => (props.isOpen ? `minmax(150px, 25%)` : '64px')} auto;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Center = styled.div`
  display: grid;
  place-items: center;
`;

const Toolbar = styled.div`
  position: relative;
  z-index: 1;
  height: 50vh;
  background: rgba(255, 255, 255, 0.1);
`;

const Main: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <MainContainer isOpen={isOpen}>
      <Toolbar onClick={() => setIsOpen((v) => !v)}>Toolbar</Toolbar>
      <Center>
        <ContentContainer>
          <Projects />
          <MapProject />
        </ContentContainer>
      </Center>
    </MainContainer>
  );
};

export default Main;
