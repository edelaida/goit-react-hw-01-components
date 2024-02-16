import '../index.css';
import { Statistics } from './Statistics/Statistics.jsx';
import dataStats from '../assets/data.json';
import { FriendList } from './FriendList/FriendList.jsx';
import friendItem from '../assets/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import historiElem from '../assets/transactions.json';
import { Profile } from './Profile/Profile.jsx';
import user from '../assets/user.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={dataStats} />
      <FriendList friends={friendItem} />
      <TransactionHistory transactions={historiElem} />
    </div>
  );
}
export default App;
