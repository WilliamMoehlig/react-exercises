import React from 'react';
import { Draggable } from 'gsap/all';

const WithDragable = WrappedComponent =>
  class withDraggable extends React.Component {
    constructor(props) {
      super(props);
      this.dragRef = React.createRef();
      this.spanRef = React.createRef();
      this.dragText = '';
    }

    componentDidMount() {
      this.onDrag({ target: this.dragRef.current });
      new Draggable(this.dragRef.current, { onDrag: this.onDrag });
    }

    onDrag = e => {
      const { x, y } = e.target.getBoundingClientRect();
      this.spanRef.current.innerText = `(${Math.round(x)}, ${Math.round(y)})`;
    };

    render() {
      return (
        <span className="Draggable" ref={this.dragRef}>
          <WrappedComponent {...this.props} />
          <span className="SpanRef" ref={this.spanRef}></span>
        </span>
      );
    }
  };

export default WithDragable;
