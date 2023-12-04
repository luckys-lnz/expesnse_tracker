import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import { AddTransactions } from './components/AddTransactions';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container"></div>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransactions />
    </GlobalProvider>
  );
}

export default App;
