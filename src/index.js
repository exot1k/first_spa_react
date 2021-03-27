import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {
        id: 1,
        name: 'Dimych'
    },
    {
        id: 2,
        name: 'Andrey'
    },
    {
        id: 3,
        name: 'Djohn'
    },
    {
        id: 4,
        name: 'Victor'
    },
    {
        id: 5,
        name: 'Valery'
    },
    {
        id: 6,
        name: 'Sany'
    }];



let messagesData = [
    {
        id: 1,
        message: 'Hi'
    },
    {
        id: 2,
        message: 'How are you?'
    },
    {
        id: 3,
        message: 'Yo'
    },
    {
        id: 4,
        message: 'Yo'
    },
    {
        id: 5,
        message: 'Yo'
    },
    {
        id: 6,
        message: 'Yo'
    }];

let postsData = [
    {
        id: 1,
        message: 'Hi,How are you',
        likesCount: 12
    },
    {
        id: 2,
        message: 'It\'s my frist post?"',
        likesCount: 11
    },
    {
        id: 3,
        message: 'Yo',
        likesCount: 0
    },
    {
        id: 4,
        message: 'Yo',
        likesCount: 0
    },
    {
        id: 5,
        message: 'Yo',
        likesCount: 0
    },
    {
        id: 6,
        message: 'Yo',
        likesCount: 0
    }];

ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
