import PropTypes from 'prop-types';
import { FriendItem, Status, FriendImg, FriendName} from './FriendList.styled';

export function FriendListItem({avatar, name, isOnline}){
    return (<FriendItem>
    <Status online={isOnline}></Status>
    <FriendImg src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </FriendItem>)
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};