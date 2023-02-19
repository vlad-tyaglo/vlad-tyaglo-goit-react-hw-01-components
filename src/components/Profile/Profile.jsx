import PropTypes from 'prop-types';
import { ProfileWrapper, UserDescription, UserStats, Item, UserImg } from './Profile.styled';

export function Profile(props) {
    const { username, tag, location, avatar, stats: {followers, views, likes} } = props;
    return (
          <ProfileWrapper>
            <UserDescription>
              <UserImg
                src={avatar}
                alt="User avatar"
                className="avatar"
              />
              <p className="name">{username}</p>
              <p className="tag">@{tag}</p>
              <p className="location">{location}</p>
            </UserDescription>
      
            <UserStats>
              <Item>
                <span className="label">{followers}</span>
                <span className="quantity">1000</span>
              </Item>
              <Item>
                <span className="label">{views}</span>
                <span className="quantity">2000</span>
              </Item>
              <Item>
                <span className="label">{likes}</span>
                <span className="quantity">3000</span>
              </Item>
            </UserStats>
          </ProfileWrapper>
        );
  };

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  };
