import React, { Component } from 'react';
import {
	View, Text, Button
} from 'react-native';
import { TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const tabsNavigator = TabNavigator({
  ta: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
  tab3: { screen: RecentChatsScreen },
  tab4: { screen: AllContactsScreen },
});

export default tabsNavigator