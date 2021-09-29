import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Header from './components/Header';
import Root from "./pages/Root"
import YaniList from './pages/YaniList'
import YaniReview from './pages/YaniReview'

function App() {

  return (

    <div>

      <Header />

      <Router>
        <div>
          <Route exact path='/' component={Root} />
          <Route exact path='/list' component={YaniList} />
          <Route exact path='/review' component={YaniReview} />
        </div>
      </Router>

    </div>
  );
}

export default App;
