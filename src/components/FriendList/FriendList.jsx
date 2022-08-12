import FriendsListItem from 'components/FriendList/FriendsListItem';
import PropTypes from 'prop-types';
import s from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      <FriendsListItem friends={friends} />
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array,
};
