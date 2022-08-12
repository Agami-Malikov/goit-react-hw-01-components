import PropTypes from 'prop-types';
import s from './friendList.module.css';

const FriendsListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (<li className={s.item} key={id}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>)
  });
};

export default FriendsListItem;

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
