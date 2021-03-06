import React from "react";
import MyJobs from "./MyJobs.jsx";
import MyOffers from "./MyOffers.jsx";
import "../style/Component/You.css";

class You extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "home" };
    this.onClick = this.onClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.setState({ view: "home" });
  }
  onClick(e) {
    this.setState({ view: e.target.innerHTML });
  }

  render() {
    return (
      <div>
        {this.state.view === "home" ? (
          <div>
            <button className="y1" onClick={this.onClick}>
              My Jobs
            </button>
            <button className="y2" onClick={this.onClick}>
              My offers
            </button>
          </div>
        ) : this.state.view === "My Jobs" ? (
          <MyJobs goBack={this.goBack} />
        ) : this.state.view === "My offers" ? (
          <MyOffers goBack={this.goBack} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default You;
