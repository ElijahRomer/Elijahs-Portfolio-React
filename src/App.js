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
        <Route path="/Elijahs-Portfolio-React/resume" component={ResumePage} />
        <Route path="/Elijahs-Portfolio-React/work" component={WorkPage} />
        <Route
          path="/Elijahs-Portfolio-React/contact"
          component={ContactPage}
        />
      </Switch>
    </Layout>
  );
}

export default App;
