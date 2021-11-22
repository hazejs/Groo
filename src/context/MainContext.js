import createDataContext from './createDataContext';
import itunes from '../api/itunes'
import {LOOKUP, SEARCH, SEARCH_2} from '../helpers/consts'

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return { ...state, suggestions: action.payload.results };
    case 'error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const searchApi = (dispatch) => async (value) => {
  try {
    const response = await itunes.get(SEARCH + value + SEARCH_2);
    dispatch({ type: 'search', payload: response.data });

  } catch (err) {
    dispatch({
      type: 'error',
      payload: 'Something Went Wrong With The Search',
    });
  }
};

export const { Context, Provider } = createDataContext(
  mainReducer,
  { searchApi },
  { selected: {}, suggestions: [], err: '' }
);
