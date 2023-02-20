import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Work Sans:300,400,500,600,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <App />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Index />);