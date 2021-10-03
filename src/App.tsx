import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Root from "./pages/Root"
import YaniList from './pages/YaniList'
import YaniReview from './pages/YaniReview'
import ReviewEdit from './pages/ReviewComponents/ReviewEdit'

const App = (): JSX.Element => {

  return (

    <div>
      <Header />

      <Router>
        <div>
          <Route exact path='/' component={Root} />
          <Route exact path='/list' component={YaniList} />
          <Route exact path='/review' component={YaniReview} />
          <Route exact path='/review-edit' component={ReviewEdit} />
        </div>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
