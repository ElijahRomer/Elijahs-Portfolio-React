import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

import BioPage from './pages/Bio';
import ResumePage from './pages/Resume';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Elijahs-Portfolio-React/" exact component={BioPage} />
        <Route
          path="/Elijahs-Portfolio-React/resume"
          exact
          component={ResumePage}
        />
        <Route
          path="/Elijahs-Portfolio-React/work"
          exact
          component={WorkPage}
        />
        <Route
          path="/Elijahs-Portfolio-React/contact"
          exact
          component={ContactPage}
        />
      </Switch>
    </Layout>
  );
}

export default App;
