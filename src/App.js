import Home from './pages/home.js';

import {StyledContainer} from './components/styles.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <StyledContainer>

        <Home />

      </StyledContainer>
    </Router>

  );
}

export default App;
