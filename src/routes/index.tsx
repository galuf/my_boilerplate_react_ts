import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../pages/_home';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
