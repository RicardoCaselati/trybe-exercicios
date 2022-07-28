// definir STATE
const INICIAL_STATE = {
  theme: 'light'
}

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    default:
      return state;
  }
}

// criar STORE
const store = Redux.createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// Definir mudanças do estado
const action = {type: 'TOGLE_THEME'}

// disparar ações que alteram estado
const button = document.getElementById('light-switch');

button.addEventListener('click', () => {
  store.dispatch(action)
})

//leitura de estado
// getState | subscribe
store.subscribe(() => {

  const {theme} = store.getState()

  const wrapper = document.getElementById('wrapper')
  wrapper.className = theme
})
