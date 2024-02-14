import s from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendlist}>
      {friends.map((item, idx) => (
        <li className={s.item} key={item.id}>
          <span
            className={s.status}
            style={
              item.isOnline
                ? { backgroundColor: 'green' }
                : { backgroundColor: 'red' }
            }
          ></span>
          <img
            className={s.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
