import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
// import { useSelector } from 'react-redux';

// import { Header } from './components';
import { routes } from './routes';
import store from './redux/store';

const history = createMemoryHistory();
// import { history } from './history';

function App() {
  // const { errorMessage } = useSelector(({ stations }) => stations);

  return (
    <HelmetProvider>
      <div className="main-wrapper">
        <div className="content">
          {routes.map((route) => (
            <Router history={history}>
              <Provider store={store}>
                <Switch>
                  <Route key={route.id} path={route.path} exact>
                    <Helmet>
                      <meta name="keywords" content={route.keywords} />
                      <meta name="description" content={route.description} />
                      <title>{route.title}</title>
                      <meta property="og:title" content={route.title} />
                      <meta property="og:description" content={route.description} />
                      <meta property="og:url" content={route.path} />
                    </Helmet>
                    <route.Сomponent />
                  </Route>
                </Switch>
              </Provider>
            </Router>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
