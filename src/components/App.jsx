import { Profile } from './profile/Profile.jsx'
import '../index.css'
import userInfo from '../assets/user.json'
import { Statistics } from './Statistics/Statistics.jsx'
import dataStats from '../assets/data.json'
import { FriendList } from './FriendList/FriendList.jsx'
import friendItem from '../assets/friends.json'

function App(){
  return (
    <div>
      <Profile user={userInfo} />
      <Statistics data={dataStats} />
      <FriendList friends={friendItem} />
    </div>
  )
}

export default App
