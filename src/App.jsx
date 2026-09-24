import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import DespreMaria from './pages/DespreMaria';
import Preturi from './pages/Preturi';
import Confidentialitate from './pages/Confidentialitate';
import Termeni from './pages/Termeni';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="despre-maria" element={<DespreMaria />} />
        <Route path="preturi" element={<Preturi />} />
        <Route path="politica-de-confidentialitate" element={<Confidentialitate />} />
        <Route path="termeni-si-conditii" element={<Termeni />} />
        {/* Keeps the old static URL alive for anything already linking to it. */}
        <Route path="despre-maria.html" element={<Navigate to="/despre-maria" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
