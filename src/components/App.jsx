import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginPage, DashboardPage } from 'pages';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace></Navigate>}>
          {' '}
        </Route>
      </Route>
    </Routes>
  );
};
