import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import DataDashboard from './pages/DataDashboard';
import ProjectManagement from './pages/ProjectManagement';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/departments" replace />} />
          <Route path="/departments" element={<Dashboard />} />
          <Route path="/dashboard" element={<DataDashboard />} />
          <Route path="/projects" element={<ProjectManagement />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
