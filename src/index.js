import React from "react";
import { render } from "react-dom";

import Counter from './counter_increment.js';


const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));