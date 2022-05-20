import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddUser from './pages/AddUser';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/common/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact component={HomePage} />
        <Route path='/add-user' exact component={AddUser}/>
        {/* Implement your route here */}
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default App;
