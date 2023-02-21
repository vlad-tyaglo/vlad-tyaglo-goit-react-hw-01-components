import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types';
import { FriendsDiv } from "./FriendList.styled";

export const FriendsList = ({friends}) => {
    return (
        <FriendsDiv>
            {friends.map(({id, avatar, name, isOnline}) => <FriendListItem 
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            />)}
        </FriendsDiv>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({id: PropTypes.number.isRequired})
    )
};