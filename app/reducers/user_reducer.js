import { RECEIVE_USER } from '../actions/auth_actions';

var defaultState = {
  selectedUser: {
    username: "Mango",
    email: "comcastsucks@comcast.net",
    password: {
      type: "ultrasecretpasswordsupreme"
    },
    sponserName: 'Cloud9',
    sponserImageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/d48e1023681301.54e0162deb957.png',
    avatarUrl: 'https://www.ssbwiki.com/images/thumb/9/94/Mangomlg.jpg/200px-Mangomlg.jpg',
    aboutMe: "America!",
    twitterUrl: 'http://google.com',
    twitchUrl: 'http://google.com',
    youtubeUrl: 'http://google.com',
    live: true
  }
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return {
        selectedUser: action.user
      };

    default:
      return state;
  }
};
