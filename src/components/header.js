import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = { activeItem: 'home'}
  }

  handleItemClick = (event, {name}) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item name='pantry' active={activeItem === 'pantry'} onClick={this.handleItemClick}/>
        <Menu.Item name='generate' active={activeItem === 'generate'} onClick={this.handleItemClick}/>
      </Menu>
    );
  }
}
export default Header;