import styled from "styled-components";

export const FriendsDiv = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
  `;

  export const FriendItem = styled.li`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #9faab6;
  background-color: white;`;

export const Status = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${setIsOnlineColor}
  `;

export const FriendImg = styled.img`
  height: 50px;
  width: auto;
  border-radius: 5px;
  border: 1px solid #9faab6;`;

export const FriendName = styled.p`font-size: 24px;`;

function setIsOnlineColor(status) {
    const onlineColor = 'green';
    const offlineColor = 'red';
    if (!status.online) {
        return offlineColor;
    }
    return onlineColor;
}