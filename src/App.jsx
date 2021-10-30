import WrapperProfile from './components/WrapperProfile/WrapperProfile';
import WrapperStatistics from './components/WrapperStatistics/WrapperStatistics';
import WrapperFriendList from './components/WrapperFriendList/WrapperFriendList';
import WrapperTransactionHistory from './components/WrapperTransactionHistory/WrapperTransactionHistory';
import user from './data/user.json';
import stats from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './App.css';

function App() {
  return (
    <div>
      <WrapperProfile user={user} />
      <WrapperStatistics statisticalData={stats} />
      <WrapperFriendList friends={friends} />
      <WrapperTransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
