import WrapperProfile from './components/WrapperProfile/WrapperProfile';
import WrapperStatistics from './components/WrapperStatistics/WrapperStatistics';
import user from './data/user.json';
import stats from './data/statistical-data.json';
import './App.css';

function App() {
  return (
    <div>
      <WrapperProfile user={user} />
      <WrapperStatistics statisticalData={stats} />
    </div>
  );
}

export default App;
