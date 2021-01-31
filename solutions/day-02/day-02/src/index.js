import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reactLogo from './images/logo.png'
import frontEnd from './images/frontend.png'

const author = {
  firstName: 'Milena',
  lastName:'Martinez',
}
const date = {
  date: '31/01/2021'
}

const tech = ['HTML', 'CSS', 'Javascript']
const techList = tech.map((e)=> <li key={e}>{e}</li>)
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: ' Helvetica Neue',
  padding:25,
  lineHeight:1.5,
}


const header =  (
<header style={headerStyles}>
<h1>This is a JSX element</h1>
<h2>Getting Started React</h2>
<h3>Javascript Library</h3>
<p>{author.firstName} {author.lastName}</p>
<p>Date: {date.date}</p>
<img src={reactLogo} alt='company logo'></img>
</header>)

const appStyles={
  minHeight: '100vh'
}
const mainStyles = {
  backgroundColor:'#F3F0F5'
}
const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started with react.js</p>
    <ul>
      {techList}
      </ul>
      <img src={frontEnd} alt='tech'></img>
  </main>
)

const footerSyles={
  margin: 'auto',
  backgroundColor: '#61DBFB',
  position: 'absolute',
  bottom:0,
  width: '100%',
  textAlign:'center'
}

const footer = (
  <footer style={footerSyles}>
    <p>Copyright 2020</p>
  </footer>
)

const app = (
  <div style={appStyles}>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
