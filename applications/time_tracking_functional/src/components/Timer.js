import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <div className="meta">{this.props.project}</div>
        <div className="center aligned description">
          <h2>{this.props.elapsed}</h2>
        </div>
        <button onClick={this.props.handleEditForm}>Edit</button>
        <button onClick={() => this.props.handleDeleteTimer(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}
