
export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map((item, idx) => (
             <li class="item" key={item.id}>
                    <span class="status">{item.isOnline}</span>
                <img class="avatar" src= {item.avatar} alt="User avatar" width="48" />
                    <p class="name">{item.name }</p>
            </li> 
          ))}   
     </ul>
    )
}

 