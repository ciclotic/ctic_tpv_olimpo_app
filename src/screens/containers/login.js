import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Text,
  Button,
} from 'native-base';
import {styleScreen, colorScreen} from '../../../styles/screens/screen';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: styleScreen.headerStyle,
    headerTitleStyle: styleScreen.headerTitleStyle,
    headerTintColor: colorScreen.headerTintColor,
  };
  render() {
    return (
      <Container style={styleScreen.container}>
        <Header />
        <Content>
          <Item>
            <Icon active name="home" />
            <Input placeholder="Icon Textbox" />
          </Item>
          <Item>
            <Input placeholder="Icon Alignment in Textbox" />
            <Icon active name="swap" />
          </Item>
          <Button
            block
            onPress={() => this.props.navigation.navigate('Filter')}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
