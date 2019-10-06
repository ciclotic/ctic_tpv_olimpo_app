import React, {Component} from 'react';
import {FlatList, SafeAreaView, Image} from 'react-native';
import {
  Button as ButtonNativeBase,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
import LogoTitle from '../../sections/components/logo-title';
import {connect} from 'react-redux';
import {styleScreen, colorScreen} from '../../../styles/screens/screen';
//import {styleHome, colorHome} from '../../../styles/screens/home';

import Empty from '../../sections/containers/empty';
import Separator from '../../sections/components/vertical-separator';

function mapStateToProps(state) {
  return {
    list: state.emptyList,
  };
}

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      headerStyle: styleScreen.headerStyle,
      headerTitleStyle: styleScreen.headerTitleStyle,
      headerTintColor: colorScreen.headerTintColor,
      headerTitle: <LogoTitle />,
      headerLeft: (
        <ButtonNativeBase
          onPress={() => navigation.navigate('Add')}
          transparent>
          <Icon name="plus" type={'AntDesign'} style={styleScreen.iconStyle} />
        </ButtonNativeBase>
      ),
      headerRight: (
        <ButtonNativeBase
          onPress={() => navigation.navigate('Message')}
          transparent>
          <Icon name="mail" type={'AntDesign'} style={styleScreen.iconStyle} />
        </ButtonNativeBase>
      ),
    };
  };
  keyExtractor = item => item.id.toString();
  renderEmtpy = () => <Empty text="No hay posts :(" />;
  itemSeparator = () => <Separator />;
  viewPost = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_POST',
      payload: {
        movie: item,
      },
    });

    this.props.navigation.navigate('Details');
  };
  renderItem = ({item}) => {
    return (
      <Card
        style={{flex: 0}}
        onPress={() => {
          this.viewPost(item);
        }}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: item.user.photoUrl}} />
            <Body>
              <Text>{item.user.username}</Text>
              <Text note>{item.creationDate}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{uri: item.site.photoUrl}}
              style={{height: 200, alignSelf: 'stretch', flex: 1}}
            />
            <Text style={{marginTop: 10}}>{item.presentation}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Text style={{fontSize: 12, justifyContent: 'center'}}>
            Compartir nos ayuda a todos
          </Text>
          <Left style={{flex: 1, justifyContent: 'center'}}>
            <ButtonNativeBase transparent>
              <Icon
                name="facebook"
                type={'Entypo'}
                style={{fontSize: 26, color: '#232F46'}}
              />
            </ButtonNativeBase>
            <ButtonNativeBase transparent>
              <Icon
                name="twitter"
                type={'Entypo'}
                style={{fontSize: 26, marginLeft: 20, color: '#232F46'}}
              />
            </ButtonNativeBase>
          </Left>
        </CardItem>
      </Card>
    );
  };
  render() {
    return (
      <SafeAreaView style={styleScreen.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);
