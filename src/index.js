import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Container from './components/elements/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/RegisterUsers';
import EditExpenses from './components/expenses/EditExpenses';
import Expenditure from './components/expenses/Expenditure';
import ExpenseByCategory from './components/expenses/ExpensesByCategory';
import ExpenseList from './components/expenses/ExpensesList';
import { Helmet } from "react-helmet";
import logo from './images/logo.png';
import Background from './components/elements/Background';

WebFont.load({
  google: {
    families: ['Work Sans:300,400,500,600,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        {/*         <title>Expense Tracker</title> */}
        <link rel="icon" href={logo} />
      </Helmet>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit/:id" element={<EditExpenses />} />
            <Route path="/expenditure" element={<Expenditure />} />
            <Route path="/categories" element={<ExpenseByCategory />} />
            <Route path="/expenses-list" element={<ExpenseList />} />
          </Routes>
        </Container>
      </BrowserRouter>

      <Background />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Index />);