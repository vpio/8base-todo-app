import React, { Component } from 'react';
import Routes from './components/routes/Routes.jsx';
import { EightBaseAppProvider } from '@8base/app-provider';
import { EightBaseBoostProvider, Loader } from '@8base/boost';
import {BrowserRouter} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <EightBaseBoostProvider>
          <EightBaseAppProvider uri={ `https://api.8base.com/cjnluze8s000601qgbi7od6ng` } >
            {
              ({ loading }) => loading ? <Loader /> : <Routes />
            }
          </EightBaseAppProvider>
        </EightBaseBoostProvider>
      </BrowserRouter>
    );
  }
}

export default App;
