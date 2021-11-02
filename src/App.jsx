import Wrapper from './components/Wrapper/Wrapper';
import user from './data/user.json';
import stats from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper
        user={user}
        statisticalData={stats}
        friends={friends}
        transactions={transactions}
      />
    </div>
  );
}

export default App;
