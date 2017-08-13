//may not need selectors?
import values from 'lodash/values';

export const selectAllLiveBrackets = state => values(state.bracket.liveBrackets);
