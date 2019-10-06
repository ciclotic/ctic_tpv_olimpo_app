import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../src/screens/containers/login';
import HomeScreen from '../src/screens/containers/home';
import DetailsScreen from '../src/screens/containers/detail';
import AddScreen from '../src/screens/containers/add';
import MessageScreen from '../src/screens/containers/message';
import SearchScreen from '../src/screens/containers/search';
import FilterScreen from '../src/screens/containers/filter';
import UserScreen from '../src/screens/containers/user';
import {styleTab} from '../styles/tab';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'native-base';
import React from 'react';

const HomeStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Details: DetailsScreen,
    Add: AddScreen,
    Message: MessageScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    Filter: FilterScreen,
  },
  {
    initialRouteName: 'Search',
  },
);

const UserStack = createStackNavigator(
  {
    User: UserScreen,
  },
  {
    initialRouteName: 'User',
  },
);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: event => {
          if (event.focused) {
            return (
              <Icon
                name="home"
                type={'AntDesign'}
                style={styleTab.iconFocusedStyle}
              />
            );
          } else {
            return (
              <Icon name="home" type={'AntDesign'} style={styleTab.iconStyle} />
            );
          }
        },
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: event => {
          if (event.focused) {
            return <Icon name="search" style={styleTab.iconFocusedStyle} />;
          } else {
            return <Icon name="search" style={styleTab.iconStyle} />;
          }
        },
      },
    },
    User: {
      screen: UserStack,
      navigationOptions: {
        tabBarIcon: event => {
          if (event.focused) {
            return (
              <Icon
                name="user"
                type={'AntDesign'}
                style={styleTab.iconFocusedStyle}
              />
            );
          } else {
            return (
              <Icon name="user" type={'AntDesign'} style={styleTab.iconStyle} />
            );
          }
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    labeled: false,
    barStyle: styleTab.barStyle,
  },
);

export {TabNavigator};
