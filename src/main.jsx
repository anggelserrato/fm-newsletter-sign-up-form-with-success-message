import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SignUpForm from './components/SignUpForm';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUpForm />
  </StrictMode>
);
