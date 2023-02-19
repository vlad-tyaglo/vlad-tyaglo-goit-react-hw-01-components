import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import { FriendsList } from "./FriendList/FriendList";

export const App = () => {
  return <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendsList friends={friends} />
  </div>
}