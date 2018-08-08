import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, StackNavigator} from 'react-navigation';
import Loadable from 'react-loadable';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ArtistScreen from '../screens/ArtistScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GenreArtistScreen from '../screens/GenreArtistScreen';
import SongScreen from '../screens/SongScreen';
import ContactScreen from '../screens/ContactScreen';

const Loading = () => {
  return 'Loading...'
};

// const Lo = Loadable({
//   loader: () => import('../screens/GenreArtistScreen'),
//   loading: Loading
// });

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  // Home: loadable({
  //   loader: () => import('../screens/HomeScreen'),
  //   loading: loading
  // }),

});


HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-options'}
    />
  ),
};


export const GenreArtistStack = StackNavigator({
  Genre: GenreArtistScreen,
  Artist: ArtistScreen,
  Song: SongScreen,
});

GenreArtistStack.navigationOptions = {
  tabBarLabel: 'Genre',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-options'}
    />
  ),
};

const SongStack = createStackNavigator({
  Song: SongScreen,
});

SongStack.navigationOptions = {
  tabBarLabel: 'Personal',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-options'}
    />
  ),
};


const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});

ContactStack.navigationOptions = {
  tabBarLabel: 'Contact',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-options'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  GenreArtistStack,
  SongStack,
  ContactStack
});
