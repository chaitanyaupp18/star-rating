import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating'
import Event from './components/event'

function App() {
  return (
    <div className="App">
      <StarRating/>
      <Event message="Chai"/>
    </div>
  );
}

export default App;
