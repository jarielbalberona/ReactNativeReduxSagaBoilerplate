import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class MainHeader extends Component {
  render() {
    const { title } = this.props;
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}