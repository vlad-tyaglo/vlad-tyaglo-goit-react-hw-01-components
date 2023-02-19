import { FriendListItem } from "./FriendListItem"

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