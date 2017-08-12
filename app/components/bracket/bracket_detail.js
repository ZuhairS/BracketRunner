//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { receiveBracket } from '../../actions/bracket_actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

//components
import PlayerModal from '../modals/player_modal';
import SetResultsCounter from './set_results_counter';

export default class BracketDetail extends Component{
  constructor(props) {
    super(props);

    this.getBracket = this.getBracket.bind(this);
    this.onLearnMore = this.onLearnMore.bind(this);
  }

  onLearnMore() {
    this.props.navigation.navigate('PlayerModal');
  }

  getBracket() {
    this.props.receiveBracket();
  }

  render() {
    let { matches } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Tournament Name</Text>
        </View>
        <Swiper style={styles.wrapper} height={500} horizontal={true}>
          <View style={styles.slide1}>
              {/*Round 1*/}
              <View>
                <Text style={styles.round}>Round 1</Text>

                <View style={styles.match}>
                  {/*Match 1*/}
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 1 profile pic */}
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.matchup}>
                      {matches[0].player1} vs {matches[0].player2}
                    </Text>
                    <SetResultsCounter/>
                  </View>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 2 profile pic */}
                  </TouchableOpacity>
                </View>

                <View style={styles.match}>
                  {/*Match 2*/}
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 1 profile pic */}
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.matchup}>
                      {matches[1].player1} vs {matches[1].player2}
                    </Text>
                    <SetResultsCounter/>
                  </View>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 2 profile pic */}
                  </TouchableOpacity>
                </View>

                <View style={styles.match}>
                  {/*Match 3*/}
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 1 profile pic */}
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.matchup}>
                      {matches[2].player1} vs {matches[2].player2}
                    </Text>
                    <SetResultsCounter/>
                  </View>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 2 profile pic */}
                  </TouchableOpacity>
                </View>

                <View style={styles.match}>
                  {/*Match 4*/}
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 1 profile pic */}
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.matchup}>
                      {matches[3].player1} vs {matches[3].player2}
                    </Text>
                    <SetResultsCounter/>
                  </View>
                  <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                    {/* player 2 profile pic */}
                  </TouchableOpacity>
                </View>

              </View>
          </View>
          <View style={styles.slide2}>
            <View>
              <Text style={styles.round}>Round 2</Text>

              <View style={styles.match}>
                {/*Match 5*/}
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    pending vs pending
                  </Text>
                  <SetResultsCounter/>
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>

              <View style={styles.match}>
                {/*Match 6*/}
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 1 profile pic */}
                </TouchableOpacity>
                <View>
                  <Text style={styles.matchup}>
                    pending vs pending
                  </Text>
                  <SetResultsCounter/>
                </View>
                <TouchableOpacity style={styles.playerPicture} onPress={() => this.onLearnMore()}>
                  {/* player 2 profile pic */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
                      pending vs pending
                    </Text>
                    <SetResultsCounter/>
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
  }//render
}//Bracket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 400,
    paddingTop: 25,
    backgroundColor: '#333',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  wrapper: {
  },
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
  // text: {
  //   color: '#fff',
  //   fontSize: 30,
  //   fontWeight: 'bold'
  // },
  body: {
    alignSelf: 'stretch',
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    color: 'white',
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
    borderBottomWidth: .3,
    borderColor: 'yellow',
  },
  matchup: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  playerPicture: {
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#929287',
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
