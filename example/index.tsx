import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RUbutton, Thing } from '../.';

const App = () => {
  return (
    <div>
      <RUbutton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
