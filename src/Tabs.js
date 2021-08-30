import React, { Component } from "react";
import tabs from "./Data";

export default class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
    };
  }

  handleClick(index) {
    if (index === this.state.active) this.setState({ active: -1 });
    else this.setState({ active: index });
  }
  shouldComponentUpdate(prevProp) {
    if (prevProp.name.match.params.name !== this.props.name.match.params.name)
      this.setState({ active: 0 });
    return true;
  }

  render() {
    let name = this.props.name.match.params.name;

    return (
      <React.Fragment>
        <h1>{name}</h1>
        {tabs
          .filter((tab) => tab.name.toLowerCase() === name.toLowerCase())[0]
          .subTabs.map((item, index) => (
            <li
              onClick={() => this.handleClick(index)}
              className={index === this.state.active ? "active-text" : null}
              key={index}
            >
              {item.name}
              {index === this.state.active ? (
                <p className="para-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ante metus dictum at tempor commodo ullamcorper a lacus
                  vestibulum. In hendrerit gravida rutrum quisque non tellus
                  orci. Ornare arcu odio ut sem nulla pharetra. Enim diam
                  vulputate ut pharetra. Placerat orci nulla pellentesque
                  dignissim enim sit amet venenatis urna. Massa ultricies mi
                  quis hendrerit. Mauris ultrices eros in cursus. Neque
                  convallis a cras semper. In iaculis nunc sed augue lacus
                  viverra vitae congue. Ac orci phasellus egestas tellus rutrum
                  tellus pellentesque eu. Cursus mattis molestie a iaculis at
                  erat pellentesque. Vestibulum morbi blandit cursus risus at
                  ultrices mi. Cursus metus aliquam eleifend mi. Turpis cursus
                  in hac habitasse. Ac orci phasellus egestas tellus rutrum
                  tellus pellentesque eu tincidunt. Tristique senectus et netus
                  et malesuada fames ac. Nunc id cursus metus aliquam eleifend.
                  Pharetra vel turpis nunc eget lorem dolor.
                </p>
              ) : null}
            </li>
          ))}
      </React.Fragment>
    );
  }
}
