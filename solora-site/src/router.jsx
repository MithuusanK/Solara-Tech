import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import HowWeWork from './pages/HowWeWork';
import OurImpact from './pages/OurImpact';
import About from './pages/About';
import Contact from './pages/Contact';
import EnergyTransition from './pages/services/EnergyTransition';
import WasteManagement from './pages/services/WasteManagement';
import EnvironmentalAnalytics from './pages/services/EnvironmentalAnalytics';
import TechnologyEvaluation from './pages/services/TechnologyEvaluation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'what-we-do',
        element: <WhatWeDo />,
      },
      {
        path: 'how-we-work',
        element: <HowWeWork />,
      },
      {
        path: 'our-impact',
        element: <OurImpact />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'services/energy-transition-strategy',
        element: <EnergyTransition />,
      },
      {
        path: 'services/waste-management',
        element: <WasteManagement />,
      },
      {
        path: 'services/environmental-analytics',
        element: <EnvironmentalAnalytics />,
      },
      {
        path: 'services/technology-evaluation-adoption',
        element: <TechnologyEvaluation />,
      },
    ],
  },
]);

export default router;
