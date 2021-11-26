import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import Header from './Header';
import BookPage from '../pages/BookPage/BookPage';

const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route
            exact
            path="/details/:id"
            render={({ match }) => {
              return <BookPage id={match.params.id} />;
            }}
          />

          <Route
            render={() => (
              <div style={{ color: 'red', textAlign: 'center', fontSize: '25px' }}>
                Error 404!!!
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
