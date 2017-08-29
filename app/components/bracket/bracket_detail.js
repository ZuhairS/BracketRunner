//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
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
    this.goBack = this.goBack.bind(this);
  }

  onLearnMore(user) {
    this.props.navigation.navigate('PlayerModal', { user });
  }

  onEditPress(bracket, matchIndex) {
    this.props.navigation.navigate('ResultForm', { bracket, matchIndex });
  }

  goBack() {
    this.props.navigation.navigate('BracketFeed');
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
      <Image source={ {uri: 'https://www.walldevil.com/wallpapers/a39/shoutbox-twitter-background-gamers-style-images-twisted.jpg'} } style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => this.goBack()}>
          <Text style={styles.backButtonText}>
            Bracket Feed
          </Text>
        </TouchableOpacity>
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
                </TouchableOpacity>
                <View>
                  <View style={styles.matchUpContainer}>
                    <Text style={styles.matchupLeft}>
                      {bracket.matches[0].pairing.player1}
                    </Text>
                    <Text style={styles.vs}>
                      vs
                    </Text>
                    <Text style={styles.matchupRight}>
                      {bracket.matches[0].pairing.player2}
                    </Text>
                  </View>
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
                  <View style={styles.matchUpContainer}>
                    <Text style={styles.matchupLeft}>
                      {bracket.matches[1].pairing.player1}
                    </Text>
                    <Text style={styles.vs}>
                      vs
                    </Text>
                    <Text style={styles.matchupRight}>
                      {bracket.matches[1].pairing.player2}
                    </Text>
                  </View>
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
                  <View style={styles.matchUpContainer}>
                    <Text style={styles.matchupLeft}>
                      {bracket.matches[2].pairing.player1}
                    </Text>
                    <Text style={styles.vs}>
                      vs
                    </Text>
                    <Text style={styles.matchupRight}>
                      {bracket.matches[2].pairing.player2}
                    </Text>
                  </View>
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
                  <View style={styles.matchUpContainer}>
                    <Text style={styles.matchupLeft}>
                      {bracket.matches[3].pairing.player1}
                    </Text>
                    <Text style={styles.vs}>
                      vs
                    </Text>
                    <Text style={styles.matchupRight}>
                      {bracket.matches[3].pairing.player2}
                    </Text>
                  </View>
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
                  <View style={styles.matchUpContainer}>
                    <Text style={styles.matchupLeft}>
                      {bracket.matches[4].pairing.player1}
                    </Text>
                    <Text style={styles.vs}>
                      vs
                    </Text>
                    <Text style={styles.matchupRight}>
                      {bracket.matches[4].pairing.player2}
                    </Text>
                  </View>
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
                  <View style={styles.matchUpContainer}>
                    <Text style={styles.matchupLeft}>
                      {bracket.matches[5].pairing.player1}
                    </Text>
                    <Text style={styles.vs}>
                      vs
                    </Text>
                    <Text style={styles.matchupRight}>
                      {bracket.matches[5].pairing.player2}
                    </Text>
                  </View>
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
                  <View style={styles.matchUpContainer}>
                    <Text style={styles.matchupLeft}>
                      {bracket.matches[6].pairing.player1}
                    </Text>
                    <Text style={styles.vs}>
                      vs
                    </Text>
                    <Text style={styles.matchupRight}>
                      {bracket.matches[6].pairing.player2}
                    </Text>
                  </View>
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
      </Image>
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
    backgroundColor: 'transparent',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#000'
  },
  backButton: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'yellow',
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    position: 'absolute',
    right: 10,
    top: 5
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'yellow',
    fontFamily: 'Verdana-Bold'
  },
  editButton: {
    position: 'absolute',
    top: -30,
    right: 105,
  },
  header: {
    marginTop: 35,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    fontFamily: 'Verdana-Bold'
  },
  wrapper: {},
  slide: {
    flex: 8,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  slide1: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  slide2: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  slide3: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Verdana-Bold'
  },
  body: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  round: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Verdana-Bold'
  },
  match: {
    backgroundColor: 'transparent',
    height: 70,
    width: 330,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: .5,
    borderColor: 'yellow'
  },
  matchUpContainer: {
    flexDirection: 'row',
  },
  vs: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    width: 30,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    fontFamily: 'Verdana-Bold'
  },
  matchupRight: {
    fontSize: 15,
    width: 105,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    textAlign: 'left',
    fontFamily: 'Verdana-Bold'
  },
  matchupLeft: {
    fontSize: 15,
    width: 100,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    textAlign: 'right',
    fontFamily: 'Verdana-Bold'
  },
  resultText: {
    color: 'yellow',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'Verdana-Bold'
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
