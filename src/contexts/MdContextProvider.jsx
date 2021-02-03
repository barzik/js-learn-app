import React, { Component } from 'react';
import indexMarkdownPath from './../docs/01-הקדמה/1-פתיחה.md';

const { Provider, Consumer } = React.createContext();

class MdContextProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      md: '',
    }
    this.loadMd = this.loadMd.bind(this);
  }

  componentDidMount() {
    fetch(indexMarkdownPath).then((response) => response.text()).then((text) => {
      this.setState({ md: text })
    })
  }
  
  async loadMd(item) {
    const file = await import('./../../' + item.path);
    const response = await fetch(file.default);
    const text = await response.text();
    this.setState({ md: text })
  }

  render() {
    return <Provider value={ { md: this.state.md, loadMd: this.loadMd } }>{this.props.children}</Provider>;
  }
}

export { MdContextProvider, Consumer as MdContextConsumer };
