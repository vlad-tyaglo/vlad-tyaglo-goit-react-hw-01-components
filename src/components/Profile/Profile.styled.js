import styled from "styled-components";


export const ProfileWrapper = styled.div`
width: 400px;
border-radius: 5px;
font-weight: 500;
font-size: 24px;
border: 1px solid #9faab6;
background-color: white;
margin-bottom: 50px;
`;

export const UserDescription = styled.div`
    text-align: center;
`
export const UserStats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #9faab6;
  background-color: #f4f6f9
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  border-top: 1px solid #e5eaf0;
  
  &:not(:last-child) {border-right: 1px solid #e5eaf0};
  `;

  export const UserImg = styled.img`
  max-width: 150px;
  margin: 0 auto;
  border: 1px solid #9faab6;
  border-radius: 50%;`;