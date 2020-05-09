import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import bugs from "../bugs.json";
import fish from "../fish.json";
import Animals from "../components/animals";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Button from "@kiwicom/orbit-components/lib/Button";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 10px;
`;

// const Button = styled.button`
//   font-size: 1em;
//   padding: 10px 0px;
//   border: 2px solid #3d3d3d;
//   border-radius: 3px;
//   background-color: white;
// `;

const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <Button onClick={onClick}>{children}</Button>;
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <span>{children}</span> : null;
};

export default function IndexPage() {
  return (
    <Tabs>
      <GlobalStyle />
      <StyledTabs>
        <Tab>Fish</Tab>
        <Tab>Bugs</Tab>
      </StyledTabs>

      <Panel>
        <Animals type={fish} />
      </Panel>

      <Panel>
        <Animals type={bugs} />
      </Panel>
    </Tabs>
  );
}
