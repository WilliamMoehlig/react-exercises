import React from 'react';
import { Draggable } from 'gsap/all';

class WithDraggableDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: undefined,
      y: undefined,
    };
  }

  componentDidMount() {
    new Draggable(this.ELEMENT, { onDrag: this.onDrag });
  }

  onDrag = e => {
    const { x, y } = e.target.getBoundingClientRect();
    this.setState({
      x: Math.round(x),
      y: Math.round(y),
    });
  };

  render() {
    return (
      <span className="Draggable" ref={e => (this.ELEMENT = e)}>
        {this.props.render(this.state.x, this.state.y)}
      </span>
    );
  }
}
export default WithDraggableDrop;
