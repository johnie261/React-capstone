import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
