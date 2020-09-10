import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data.js";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: SECTIONS_DATA,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
