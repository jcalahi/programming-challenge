import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Person from './pages/person'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/person/:id" element={<Person />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
