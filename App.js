// App.js - COMPLETE UPDATED VERSION
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Login from './Login';
import DataEntry from './DataEntry';
import Beneficiaries from './Beneficiaries';
import Reports from './Reports';
import Admin from './Admin';
import AuthProvider from './AuthProvider';
import { BeneficiariesProvider } from './BeneficiariesContext';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BeneficiariesProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/data-entry" 
                  element={
                    <ProtectedRoute>
                      <DataEntry />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/beneficiaries" 
                  element={
                    <ProtectedRoute>
                      <Beneficiaries />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/reports" 
                  element={
                    <ProtectedRoute>
                      <Reports />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute role="admin">
                      <Admin />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </BeneficiariesProvider>
    </AuthProvider>
  );
}

export default App;