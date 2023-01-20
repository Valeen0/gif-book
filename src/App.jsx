import './App.css';
import { Header } from './components/Header/Header';
import { Route } from 'wouter';

function App() {

  return (
    <div className="App">
      <Header/>

      <Route path='/search/:keyword' />

    </div>
  )
}

export default App
