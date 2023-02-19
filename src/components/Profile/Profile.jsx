import PropTypes from 'prop-types';
import { ProfileWrapper, UserDescription } from './Profile.styled';

export function Profile(props) {
    const { username, tag, location, avatar, stats: {followers, views, likes} } = props;
    return (
          <ProfileWrapper>
            <UserDescription>
              <img
                src={avatar}
                alt="User avatar"
                className="avatar"
              />
              <p className="name">{username}</p>
              <p className="tag">@{tag}</p>
              <p className="location">{location}</p>
            </UserDescription>
      
            <ul className="stats">
              <li>
                <span className="label">{followers}</span>
                <span className="quantity">1000</span>
              </li>
              <li>
                <span className="label">{views}</span>
                <span className="quantity">2000</span>
              </li>
              <li>
                <span className="label">{likes}</span>
                <span className="quantity">3000</span>
              </li>
            </ul>
          </ProfileWrapper>
        );
  };

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  };
