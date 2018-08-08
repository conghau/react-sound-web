import React from "react";
import {Platform, ScrollView, StyleSheet, Text, View} from "react-native";

import * as Contacts from "react-native-contacts";
import {isEmpty} from "lodash";
import {List, ListItem, SearchBar, Card} from "react-native-elements";
import {convertToNewPhone} from "../helper/Convert";

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentWillMount() {
    console.log(Contacts);
    Contacts.getAll((err, contacts) => {
      if (err) throw err;


      // contacts returned
      console.log(contacts);
      this.setState({contacts: contacts})
    })

  }

  renderPhoneNumber = (phoneNumbers) => {
    return phoneNumbers.map((l, i) => {
      let _old = l.number || '';
      let _new = convertToNewPhone(_old);
      return <Text key={i}>{_old} --> {_new}</Text>
    })
  };

  renderList = (contacts) => {
    if (isEmpty(contacts)) {
      return <Text>Empty</Text>
    }

    return (
      <List>
        {
          contacts.map((l, i) => {
            return (
              <Card
                key={i}
                title={`${l.familyName} ${l.givenName}`}
              >
                {this.renderPhoneNumber(l.phoneNumbers)}
              </Card>
              /*<ListItem key={i} title={`${l.familyName} ${l.givenName}`}/>*/
            )
          })
        }
      </List>
    )
  };

  onChange = () => {

  }

  render() {
    const {contacts} = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={this.onChange}
          onClearText={this.onChange}
          placeholder='Type Here...'/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.renderList(contacts)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
