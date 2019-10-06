function feed(state = {}, action) {
  switch (action.type) {
    case 'SET_JWT': {
      return {...state, jwt: action.payload};
    }
    case 'SET_EMPTY_OBJECT': {
      return {...state, emptyObject: action.payload};
    }
    case 'SET_EMPTY_LIST': {
      return {...state, emptyList: action.payload};
    }
    default:
      return state;
  }
}

export default feed;
