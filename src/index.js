import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>
	<h2>My cool Apollo app! 🚀</h2>
  </div>
);

render(<App />, document.getElementById("root"));

module.hot.accept();