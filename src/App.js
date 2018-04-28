import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

import ArticlesList from './components/articles'

import logo from './the-verge-logo.png';
import VergeName from './verge-wordmark.png';
import './App.css';
import newsapi from './api/newsApi';

class App extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    this.getArticles();
  }

  search(e, newValue) {
    this.getArticles(newValue);
  }

  getArticles(query) {
    newsapi.v2.everything({
      sources: 'the-verge',
      q: query,
      language: 'en',
    }).then(response => {
      this.setState({articles: response.articles});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={VergeName} className="App-logo" alt="logo" />
          
        </header>
        <MuiThemeProvider>
          <TextField
            hintText="Search"
            onChange={(e, newValue) => this.search(e, newValue)}
          />
        </MuiThemeProvider>
        <ArticlesList articles={this.state.articles}/>
        <footer> Powered by <a href="https://newsapi.org/"> NewsApi </a></footer>
      </div>
    );
  }
}

export default App;
