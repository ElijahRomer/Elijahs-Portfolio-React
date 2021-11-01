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
        <Route exact path="/" component={BioPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Layout>
  );
}

export default App;
