import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types';

export const FriendsList = ({friends}) => {
    return (
        <div>
            {friends.map(({id, avatar, name, isOnline}) => <FriendListItem 
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            />)}
        </div>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({id: PropTypes.number.isRequired})
    )
};