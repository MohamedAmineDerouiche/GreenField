import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>hello</div>;
  }
}

ReactDom.render(<App></App>, document.getElementById("app"));
