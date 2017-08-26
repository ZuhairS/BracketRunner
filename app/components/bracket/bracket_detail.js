//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { NavigationActions } from 'react-navigation';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//components
import PlayerModal from '../modals/player_modal';
import ResultForm from './result_form';
import { requestSelectedBracket } from '../../actions/bracket_actions';

export default class BracketDetail extends Component {
  constructor(props) {
    super(props);

    this.onLearnMore = this.onLearnMore.bind(this);
    this.onEditPress = this.onEditPress.bind(this);
    this.ShowEditButton = this.ShowEditButton.bind(this);
  }



  onLearnMore(user) {
    this.props.navigation.navigate('PlayerModal', { user });
  }

  onEditPress(bracket, matchIndex) {
    this.props.navigation.navigate('ResultForm', { bracket, matchIndex });
  }

  ShowEditButton(bracket, matchIndex) {
    if (this.props.currentUserId === this.props.navigation.state.params.bracket.tournamentOrganizerId) {
      return (
        <TouchableOpacity style={styles.editButton} onPress={() => this.onEditPress(bracket, matchIndex)}>
          <Icon name="pencil" size={25} color={'yellow'} />
        </TouchableOpacity>
      );
    } else {
      return <View style={styles.editButton} />;
    }
  }

  render() {
    const { bracket } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{bracket.title}</Text>
        </View>
        <Swiper style={styles.wrapper} height={500} horizontal={true}>
{/*Round 1*/}
          <View style={styles.slide1}>
            <View>
              <Text style={styles.round}>Round 1</Text>
    {/*Match 1*/}
              <View style={styles.match}>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    {bracket.matches[0].pairing.player1} vs {bracket.matches[0].pairing.player2}
                  </Text>
                  <Text style={styles.resultText}>
                    {bracket.matches[0].result.player1Score} - {bracket.matches[0].result.player2Score}
                  </Text>
                  {this.ShowEditButton(bracket, 0)}
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>
    {/*Match 2*/}
              <View style={styles.match}>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    {bracket.matches[1].pairing.player1} vs {bracket.matches[1].pairing.player2}
                  </Text>
                  <Text style={styles.resultText}>
                    {bracket.matches[1].result.player1Score} - {bracket.matches[1].result.player2Score}
                  </Text>
                  {this.ShowEditButton(bracket, 1)}
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>
    {/*Match 3*/}
              <View style={styles.match}>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    {bracket.matches[2].pairing.player1} vs {bracket.matches[2].pairing.player2}
                  </Text>
                  <Text style={styles.resultText}>
                    {bracket.matches[2].result.player1Score} - {bracket.matches[2].result.player2Score}
                  </Text>
                  {this.ShowEditButton(bracket, 2)}
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>
    {/*Match 4*/}
              <View style={styles.match}>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    {bracket.matches[3].pairing.player1} vs {bracket.matches[3].pairing.player2}
                  </Text>
                  <Text style={styles.resultText}>
                    {bracket.matches[3].result.player1Score} - {bracket.matches[3].result.player2Score}
                  </Text>
                  {this.ShowEditButton(bracket, 3)}
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
{/*Round 2*/}
          <View style={styles.slide2}>
            <View>
              <Text style={styles.round}>Round 2</Text>
      {/*Match 5*/}
              <View style={styles.match}>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    {bracket.matches[4].pairing.player1} vs {bracket.matches[4].pairing.player2}
                  </Text>
                  <Text style={styles.resultText}>
                    {bracket.matches[4].result.player1Score} - {bracket.matches[4].result.player2Score}
                  </Text>
                  {this.ShowEditButton(bracket, 4)}
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>
      {/*Match 6*/}
              <View style={styles.match}>

                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    {bracket.matches[5].pairing.player1} vs {bracket.matches[5].pairing.player2}
                  </Text>
                  <Text style={styles.resultText}>
                    {bracket.matches[5].result.player1Score} - {bracket.matches[5].result.player2Score}
                  </Text>
                  {this.ShowEditButton(bracket, 5)}
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>

              </View>
            </View>
          </View>
{/*Round 3*/}
          <View style={styles.slide3}>
            <Text style={styles.round}>Round 3</Text>
            <View>
              <View style={styles.match}>
    {/*Match 7*/}
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    {bracket.matches[6].pairing.player1} vs {bracket.matches[6].pairing.player2}
                  </Text>
                  <Text style={styles.resultText}>
                    {bracket.matches[6].result.player1Score} - {bracket.matches[6].result.player2Score}
                  </Text>
                  {this.ShowEditButton(bracket, 6)}
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Swiper>
      </View>
    );
  } //render
} //Bracket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 25,
    backgroundColor: '#333',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#000'
  },
  editButton: {
    position: 'absolute',
    top: -30,
    right: 105
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow'
  },
  wrapper: {},
  slide: {
    flex: 9,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  slide1: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  slide2: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  body: {
    alignSelf: 'stretch',
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  round: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 15,
    paddingTop: 25,
    textAlign: 'center',
    color: 'white'
  },
  match: {
    backgroundColor: '#333',
    height: 70,
    width: 330,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.3,
    borderColor: 'yellow'
  },
  matchup: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    width: 230,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  resultText: {
    color: 'yellow',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  playerPicture: {
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#929287'
  }
});


const mapStatetoProps = (state, props) => {
  return {
    selectedBracket: props.navigation.state.params.bracket,
    currentUserId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSelectedBracket: id => dispatch(requestSelectedBracket(id))
  };
};

module.exports = connect(mapStatetoProps, mapDispatchToProps)(BracketDetail);
