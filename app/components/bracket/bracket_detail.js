//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveBracket } from '../../actions/bracket_actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

//components
import HomePage from '../home_page';
import NavBar from '../nav_bar/nav_bar';
import BracketFeed from './bracket_feed';
import { DropDownMenu } from '../nav_bar/drop_down_menu';

export default class BracketDetail extends Component{
  constructor(props) {
    super(props);

    // this.state = {
    //   matches:[
    //     {
    //       player1:"nick",
    //       player2:"zuhair"
    //     }, {
    //       player1:"zach",
    //       player2:"ali"
    //     }, {
    //       player1:"younis",
    //       player2:"chris"
    //     }, {
    //       player1:"josh",
    //       player2:"andrew"
    //     }
    //   ]
    // }

    this.getBracket = this.getBracket.bind(this);
  }

  getBracket() {
    this.props.receiveBracket();
  }

  render() {
    const { matches } = this.props;

    return (
      <View style={styles.container}>
        <NavBar/>
        {/*link to home button*/}
        <TouchableOpacity onPress={this.navigateToHome}>
          <Text>Home</Text>
        </TouchableOpacity>
        {/*get match info button*/}
        {/* <TouchableOpacity onPress={this.getBracket}>
          <Text>Show Bracket</Text>
        </TouchableOpacity> */}
        <View style={styles.body}>
          <View style={styles.bracketContainer}>
            <Text>Matches</Text>
    {/********************************************************************/}
    {/*Round 1*/}
            <View>
              <Text>Round 1</Text>
              <View style={styles.match}>
                {/*Match 1*/}
                <Text>{matches[0].player1} vs {matches[0].player2}</Text>
              </View>

              <View style={styles.match}>
                {/*Match 2*/}
                <Text>{matches[1].player1} vs {matches[1].player2}</Text>
              </View>

              <View style={styles.match}>
                {/*Match 3*/}
                <Text>{matches[2].player1} vs {matches[2].player2}</Text>
              </View>

              <View style={styles.match}>
                {/*Match 4*/}
                <Text>{matches[3].player1} vs {matches[3].player2}</Text>
              </View>
            </View>
    {/********************************************************************/}
    {/*Round 2*/}
            <View>
              <Text>Round 2</Text>
              <View style={styles.match}>
                {/*Match 5*/}
                <Text>pending vs pending</Text>
              </View>

              <View style={styles.match}>
                {/*Match 6*/}
                <Text>pending vs pending</Text>
              </View>
            </View>
    {/********************************************************************/}
    {/*Round 3*/}
            <Text>Round 3</Text>
            <View>
              <View style={styles.match}>
                {/*Match 7*/}
                <Text>pending vs pending</Text>
              </View>
            </View>
    {/********************************************************************/}
          </View>
        </View>
      </View>
    );
  }//render
}//Bracket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 400,
    paddingTop: 25
  },
  body: {
    flex: 9,
    alignSelf: 'stretch',
    backgroundColor: '#eee',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50
  },
  showBracketButton: {
    paddingTop: 20
  }
});

const mapStatetoProps = ({bracket}) => {
  return {
    matches: bracket.matches
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveBracket: () => dispatch(receiveBracket())
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(BracketDetail);
