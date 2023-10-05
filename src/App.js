import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import LandingPage from './pages/LandingPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencesPage from './pages/ExperiencesPage'
import ResumePage from './pages/ResumePage'
import { ViewportProvider } from './context/ViewportProvider'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> }, 
      { path: 'skills', element: <SkillsPage />},
      { path: 'projects', element: <ProjectsPage />},
      { path: 'experiences', element: <ExperiencesPage />},
      { path: 'resume', element: <ResumePage />},
    ]
  },
])

function App() {
  return (
    <ViewportProvider>
      <RouterProvider router={router} />   // router prop is mandatory
    </ViewportProvider>
  );
}

export default App;
