import React from 'react';

const initialState = {
  code: '-',
  key: '-',
  keyCode: '-',
  which: '-',
};

export default class KeyListener extends React.Component {
  state = initialState;

  handleKeyDown = event => {
    const { keyCode, code, which, key } = event;
    this.setState({
      code: code.toString(),
      key: key.toString(),
      keyCode: keyCode.toString(),
      which: which.toString(),
    });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    const { code, key, keyCode, which } = this.state;
    return this.props.children({ code, key, keyCode, which });
  }
}
