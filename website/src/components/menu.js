import React, { Component } from 'react'
import { Menu as SemanticMenu } from 'semantic-ui-react'

export default class Menu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <SemanticMenu fixed={"top"} compact={true}>
        <SemanticMenu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </SemanticMenu.Item>
      </SemanticMenu>
    )
  }
}
