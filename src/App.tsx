import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import SeriesDetective from './scenarios/SeriesDetective/SeriesDetective';
import RadiusExplorer from './scenarios/RadiusExplorer/RadiusExplorer';
import FourierHarmonizer from './scenarios/FourierHarmonizer/FourierHarmonizer';
import ComplexWorld from './scenarios/ComplexWorld/ComplexWorld';
import CauchyIntegrator from './scenarios/CauchyIntegrator/CauchyIntegrator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="series" element={<SeriesDetective />} />
          <Route path="potencias" element={<RadiusExplorer />} />
          <Route path="fourier" element={<FourierHarmonizer />} />
          <Route path="complejo" element={<ComplexWorld />} />
          <Route path="integracion" element={<CauchyIntegrator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
