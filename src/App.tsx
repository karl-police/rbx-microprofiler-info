import React from "react";
import * as ReactSplitPane from "react-split-pane";

const SplitPane = ReactSplitPane.SplitPane
const Pane = ReactSplitPane.Pane


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


export default App;