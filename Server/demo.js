const redux = require("redux");

const reduxLogger = require("redux-logger");

const createStore = redux.createStore;

const combineReducer = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger;

//create const

const BUY_CAKE = "BUY_CAKE";

const BUY_ICECREAM = "BUY_ICECREAM";

// create action

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

//create reducer

const initialCakeState = {
  totalCakes: 100,
};

const initialIcecreamState = {
  totalIceCream: 80,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,

        totalCakes: state.totalCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,

        totalIceCream: state.totalIceCream - 1,
      };

    default:
      return state;
  }
};

//create store

const rootReducer = combineReducer({
  cake: cakeReducer,

  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger.default));

console.log("initial State", store.getState()); //handle y own log initial state

const unsubscribe = store.subscribe(() => {}); //handle by the logger middleware

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyIceCream());

store.dispatch(buyIceCream());

unsubscribe();
