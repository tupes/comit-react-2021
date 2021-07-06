import React, { Component } from "react";

export default class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const submitText = this.props.id ? "Update" : "Create";

    return (
      <div>
        TimerForm
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label>Project</label>
          <input
            type="text"
            name="project"
            value={this.state.project}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button
            onClick={() =>
              this.props.handleSubmitForm({
                id: this.props.id,
                title: this.state.title,
                project: this.state.project,
              })
            }
          >
            {submitText}
          </button>
          <button onClick={this.props.handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}
