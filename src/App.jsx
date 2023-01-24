import './App.css';
import { Route } from 'wouter';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Search } from './components/Search/Search';
import { GifViewer } from './components/Viewer/GifViewer';

function App() {

  return (
    <div className="App">
      <Header/>

      <Route path='/' component={Home} />
      <Route path='/search/:keyword' component={Search} />
      <Route path='/gif/:id' component={GifViewer} />
    </div>
  )
}

export default App
