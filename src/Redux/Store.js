import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// --------------- STATE INITIALIZATION ---------------

const initialState = {
   auth: {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
      token: null
   },
   isLoggedIn: false,
   hasLoginFailed: false,
   isNameEdited: false
};



// --------------- REDUCER ---------------

/**
 * Reducer function (Redux)
 * @param { Array } state - Global state
 * @param { Object } action - Action
 * @returns { Array } Updated global state
 */
function reducer(state = initialState, action) {
   switch (action.type) {
      case "LOGIN_SUCCESS_ACTION": {
         return {
            ...state,
            auth: {
               ...state.auth,
               id: action.payload.body.id,
               email: action.payload.body.email,
               firstName: action.payload.body.firstName,
               lastName: action.payload.body.lastName,
               token: action.payload.token,
            },
            isLoggedIn: true,
            hasLoginFailed: false
         }
      }
      case "LOGIN_FAILURE_ACTION": {
         return {
            ...state,
            hasLoginFailed: true
         }
      }
      case "LOGOUT_ACTION": {
         return initialState
      }
      case "EDIT_NAMES_ACTION": {
         return {
            ...state,
            isNameEdited: !state.isNameEdited
         }
      }
      case "CHANGE_NAMES_ACTION": {
         return {
            ...state,
            auth: {
               ...state.auth,
               firstName: action.payload.firstName,
               lastName: action.payload.lastName
            }
         }
      }
      default:
         return state
   }
}

// To stay logged in when page refresh
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
})

export const persistor = persistStore(store)