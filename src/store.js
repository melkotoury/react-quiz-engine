import {createStore, combineReducers , compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

//TODO Reducers

const firebaseConfig = {
    apiKey: "AIzaSyDsqWOf3XktoHBB0uN1jH4zGxkQh5w9MRk",
    authDomain: "react-quiz-engine.firebaseapp.com",
    databaseURL: "https://react-quiz-engine.firebaseio.com",
    projectId: "react-quiz-engine",
    storageBucket: "react-quiz-engine.appspot.com",
    messagingSenderId: "22057197714"
};
// reat-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};
// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});
// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer, initialState,compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;