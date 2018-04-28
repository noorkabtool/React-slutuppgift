import React from 'react';
import './articles.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function ArticlesList(props) {
  const { articles } = props;
  const listArticles = articles.map((article) =>
    <li key={article.url}
      className="article">
      <MuiThemeProvider>
        <Card>
          <CardMedia
            overlay={<CardTitle title={article.title} subtitle={'Author: ' + article.author} />}
          >
            <img src={article.urlToImage} alt="" />
          </CardMedia>
          <CardText>
            {article.description}
          </CardText>
          <CardActions>
            <FlatButton label="Read more" href={article.url}/>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </li>
  );
  return (
    <ul className="article-list">{listArticles}</ul>
  );
}

export default ArticlesList;