import React from "react";
import * as ReactSplitPane from "react-split-pane";
//import * as ReactResizeablePanels from "react-resizable-panels";

const SplitPane = ReactSplitPane.SplitPane
const Pane = ReactSplitPane.Pane

/*const Group = ReactResizeablePanels.Group
const Panel = ReactResizeablePanels.Panel
const Separator = ReactResizeablePanels.Separator*/


function App() {


  return <>
  <div id="app_wrapper">
    <SplitPane direction="horizontal">
      <Pane minSize={100} defaultSize={300}>
        <div id="app_search_container" className="app_inner">A</div>
      </Pane>
      <Pane minSize={100}>
        <div id="app_result_container" className="app_inner">B</div>
      </Pane>
    </SplitPane>
  </div>
  </>
}

/*function App2() {
  return <>
  <div id="app_wrapper">
    <Group orientation="horizontal" >
      <Panel minSize={100} defaultSize={300}>
        <div id="app_search_container" className="app_inner">A</div>
      </Panel>
      <Separator className="resizeable-separator"/>
      <Panel minSize={100}>
        <div id="app_result_container" className="app_inner">B</div>
      </Panel>
      <Separator className="resizeable-separator"/>
      <Panel minSize={100}>
        <div id="app_result_container" className="app_inner">C</div>
      </Panel>
    </Group>
  </div>
  </>
}*/


export default App;