import WrapperProfile from './components/WrapperProfile/WrapperProfile';
import user from './data/user.json';
import './App.css';

function App() {
  return (
    <div>
      <WrapperProfile user={user} />
    </div>
  );
}

export default App;
