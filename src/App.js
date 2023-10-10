import Home from "./pages/home.js";
import Login from "./pages/login.js"; 
import Register from "./pages/register.js";
import {StyledContainer} from './components/styles.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <StyledContainer>

        <Login />

      </StyledContainer>
    </Router>

  );
}

export default App;
