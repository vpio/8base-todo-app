import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Todo from './Todo.jsx';

const Routes = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Todo} />
      <Route path="/about/" component={Todo} />
      <Route path="/users/" component={Todo} />
    </div>
  )
}

export default Routes;
