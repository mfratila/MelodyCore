import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import DespreMaria from './pages/DespreMaria';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="despre-maria" element={<DespreMaria />} />
        {/* Keeps the old static URL alive for anything already linking to it. */}
        <Route path="despre-maria.html" element={<Navigate to="/despre-maria" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
