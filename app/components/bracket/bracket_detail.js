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

    this.getBracket = this.getBracket.bind(this);
  }

  getBracket() {
    this.props.receiveBracket();
  }

  render() {
    let { matches } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <NavBar />
        </View>

        <View style={styles.body}>
          <ScrollView>
            <View style={styles.bracketContainer}>
              <Text style={styles.header}>Tournament Name</Text>
{/********************************************************************/}
{/*Round 1*/}
              <View>
                <Text style={styles.round}>Round 1</Text>

                <View style={styles.match}>
                  {/*Match 1*/}
                  <View style={styles.playerPicture}>{/* player 1 profile pic */}</View>
                  <Text style={styles.matchup}>
                    {matches[0].player1} vs {matches[0].player2}
                  </Text>
                  <View style={styles.playerPicture}>{/* player 2 profile pic */}</View>
                </View>

                <View style={styles.match}>
                  {/*Match 2*/}
                  <View style={styles.playerPicture}>{/* player 1 profile pic */}</View>
                  <Text style={styles.matchup}>
                    {matches[1].player1} vs {matches[1].player2}
                  </Text>
                  <View style={styles.playerPicture}>{/* player 2 profile pic */}</View>
                </View>

                <View style={styles.match}>
                  {/*Match 3*/}
                  <View style={styles.playerPicture}>{/* player 1 profile pic */}</View>
                  <Text style={styles.matchup}>
                    {matches[2].player1} vs {matches[2].player2}
                  </Text>
                  <View style={styles.playerPicture}>{/* player 2 profile pic */}</View>
                </View>

                <View style={styles.match}>
                  {/*Match 4*/}
                  <View style={styles.playerPicture}>{/* player 1 profile pic */}</View>
                  <Text style={styles.matchup}>
                    {matches[3].player1} vs {matches[3].player2}
                  </Text>
                  <View style={styles.playerPicture}>{/* player 2 profile pic */}</View>
                </View>

              </View>
{/********************************************************************/}
{/*Round 2*/}
              <View>
                <Text style={styles.round}>Round 2</Text>

                <View style={styles.match}>
                  {/*Match 5*/}
                  <View style={styles.playerPicture}>{/* player 1 profile pic */}</View>
                  <Text style={styles.matchup}>pending vs pending</Text>
                  <View style={styles.playerPicture}>{/* player 2 profile pic */}</View>
                </View>

                <View style={styles.match}>
                  {/*Match 6*/}
                  <View style={styles.playerPicture}>{/* player 1 profile pic */}</View>
                  <Text style={styles.matchup}>pending vs pending</Text>
                  <View style={styles.playerPicture}>{/* player 2 profile pic */}</View>
                </View>

              </View>
{/********************************************************************/}
{/*Round 3*/}
              <Text style={styles.round}>Round 3</Text>
              <View>
                <View style={styles.match}>
                  {/*Match 7*/}
                  <View style={styles.playerPicture}>{/* player 1 profile pic */}</View>
                  <Text style={styles.matchup}>pending vs pending</Text>
                  <View style={styles.playerPicture}>{/* player 2 profile pic */}</View>
                </View>
              </View>
{/********************************************************************/}
            </View>
          </ScrollView>
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
    backgroundColor: 'white',
    width: 400,
    paddingTop: 25
  },
  navBar: {
    height: 60
  },
  body: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50
  },
  showBracketButton: {
    paddingTop: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    textAlign: 'center'
  },
  round: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 25,
    textAlign: 'center'
  },
  match: {
    borderColor: 'black',
    borderRadius: 4,
    height: 70,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  matchup: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 50,
    paddingRight: 50
  },
  playerPicture: {
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    width: 50,
    height: 50,
  }
});

const mapStatetoProps = ({ bracket }) => {
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
