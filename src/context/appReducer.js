
export const appReducer = (state, action) => {
    switch (action.type) {
      case 'SET_WINDOW_WIDTH':
        return Object.assign({}, state, {windowWidth: action.data})
      case 'SET_THEME':
        return Object.assign({}, state, {CurrentTheme: action.data})
      case 'LOGIN':
        return Object.assign({}, state, {CurrentUser: action.data});
      case 'LOGOUT':
        return Object.assign({}, state, {CurrentUser: null})  
      case 'INC_COUNT':
        return Object.assign({}, state, {count: state.count + 1})
      case 'DEC_COUNT':
        return Object.assign({}, state, {count: state.count - 1})
      case 'SET_PROJECTS':
        return Object.assign({}, state, {PP_ProjectList_EE: action.data})
      default:
        return state;
    }
  } 