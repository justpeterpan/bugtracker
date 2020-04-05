import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import Fish from "../components/fish";
import Bugs from "../components/bugs";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <Button onClick={onClick}>{children}</Button>;
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <p>{children}</p> : null;
};

const PanelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export default function IndexPage() {
  return (
    <Tabs>
      <GlobalStyle />
      <StyledTabs>
        <Tab>Fish</Tab>
        <Tab>Bugs</Tab>
      </StyledTabs>

      <Panel>
        <PanelGrid>
          <Fish />
        </PanelGrid>
      </Panel>
      <Panel>
        <PanelGrid>
          <Bugs />
        </PanelGrid>
      </Panel>
    </Tabs>
  );
}
