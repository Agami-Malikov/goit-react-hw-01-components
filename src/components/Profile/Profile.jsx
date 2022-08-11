import PropTypes from 'prop-types';
import s from './profile.module.css';

const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={s.description}>
      <div className={s.profile}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className="label">Followers </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className="label">Views </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
