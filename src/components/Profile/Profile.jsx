
export function Profile(props) {
    const { username, tag, location, avatar, stats: {followers, views, likes} } = props;
    return (
          <div className="profile">
            <div className="description">
              <img
                src={avatar}
                alt="User avatar"
                className="avatar"
              />
              <p className="name">{username}</p>
              <p className="tag">@{tag}</p>
              <p className="location">{location}</p>
            </div>
      
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
          </div>
        );
  };

  
