import React from 'react';
import {combineReducers, createStore} from "redux";
import imageReducer from "./image-reducer";

let reducers = combineReducers({

    imagePage:imageReducer

});

let store =createStore(reducers);

export default store;
