import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

//imported components
import { NavigationActions } from 'react-navigation'
import AlertContainer from '../alerts/alert_container';
import { Field, reduxForm } from 'redux-form';
import { editBracket } from '../../actions/bracket_actions';
// import SetResultsCounter from './set_results_counter';


// this.props.state.bracket.selectedBracket.matches[this.props.navigation.state.params.match].player1Score
// this.props.state.bracket.selectedBracket.matches[this.props.navigation.state.params.match].player2Score

ResultForm = class ResultForm extends Component {
  constructor(props) {
    super(props);

    this.onReportResult = this.onReportResult.bind(this);
    this.progressPlayer = this.progressPlayer.bind(this);
  }

  progressPlayer(p1, p2, p1Score, p2Score, matchIndex){
    //determine which match they progress to based on the winner's current position in bracket
    const matchNum = Math.floor(matchIndex / 2) + 4;
    //determine the winner of the match based on the score
    this.props.selectedBracket.matches[matchNum].pairing.winner = p1Score > p2Score ? p1 : p2;
    this.props.selectedBracket.matches[matchNum].pairing.loser = p1Score < p2Score ? p1 : p2;
    //determine whether they are player1 or player2 in the match the winner progresses to
    const matchPosition = matchIndex % 2 === 0 ? 'player1' : 'player2';
    //set match_.player_ = winner
    this.props.selectedBracket.matches[matchNum].pairing[matchPosition] =
      this.props.selectedBracket.matches[matchNum].pairing.winner;
  }

  onReportResult(values){
    const { matches } = this.props.selectedBracket;
    const { matchIndex } = this.props.navigation.state.params;

    matches[matchIndex].result.player1Score = parseInt(values.player1Score);
    matches[matchIndex].result.player2Score = parseInt(values.player2Score);

    const player1 = matches[matchIndex].pairing.player1;
    const player2 = matches[matchIndex].pairing.player2;

    if (matchIndex !== 6) {
      this.progressPlayer(player1, player2, matches[matchIndex].result.player1Score, matches[matchIndex].result.player2Score, matchIndex);
    }

    this.props.editBracket(this.props.selectedBracket)
    .then((res) => {
      const bracket = res.data;
      this.props.navigation.navigate('BracketDetail', { bracket });
    })
    .then(() => {
    this.props.reset();
    })
  }

  render() {
    const matchNum = this.props.navigation.state.params.matchIndex + 1;

    return (
      <Image source={ {uri: 'https://www.walldevil.com/wallpapers/a39/shoutbox-twitter-background-gamers-style-images-twisted.jpg'} } style={styles.container}>
        <Text style={styles.pageHeader}>Input Results</Text>
        <ScrollView>
          <View style={styles.matchContainer}>
            <Text style={styles.matchHeader}>Match {matchNum}</Text>
            <View style={styles.fieldContainer}>
              <View>
                <Text style={styles.fieldTitle}>P1</Text>
                <Field name='player1Score' component={renderInput} />
              </View>
              <View>
                <Text style={styles.fieldTitle}>P2</Text>
                <Field name="player2Score" component={renderInput} />
              </View>
            </View>
            <TouchableOpacity onPress={this.props.handleSubmit(this.onReportResult)}>
              <Text style={styles.button}>Submit</Text>
            </TouchableOpacity>
          </View>
          <AlertContainer />
        </ScrollView>
      </Image>

    );
  }

}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderRightWidth: 5,

  },
  pageHeader: {
    color: 'yellow',
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 30,
    fontFamily: 'Verdana-Bold'
  },
  matchContainer: {
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: 'yellow',
    height: 190,
    width: 300,
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Verdana-Bold'
  },
  fieldTitle:{
    color: 'yellow',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Verdana-Bold'
  },
  input: {
    color: '#333',
    backgroundColor: 'white',
    borderColor: 'yellow',
    borderRadius: 5,
    textAlign: 'center',
    padding: 5,
    height: 40,
    width: 60,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 16,
  },
  inputs: {
    color: 'white',
    borderColor: 'yellow',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 74,
    width: 250,
  },
  button: {
    backgroundColor: '#333',
    borderWidth: 1.5,
    borderColor: 'yellow',
    borderRadius: 6,
    fontWeight: 'bold',
    color: 'white',
    height: 40,
    lineHeight: 35,
    marginTop: 30,
    textAlign: 'center',
    width: 120,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Verdana-Bold'
  },
})

const mapStateToProps = (state, props) => {
  return {
    state,
    selectedBracket: props.navigation.state.params.bracket,
    matches: props.navigation.state.params.bracket.matches
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editBracket: bracket => dispatch(editBracket(bracket))
  };
};

const validate = (formProps) => {
  var errors = {};
  return errors;
}

ResultForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultForm);

export default reduxForm({
  form: 'result_form',
  fields: ['player1_result', 'player2_result'],
  validate: validate
})(ResultForm)
