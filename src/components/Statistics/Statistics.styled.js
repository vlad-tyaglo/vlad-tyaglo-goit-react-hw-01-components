import styled from "styled-components";

export const StatTable = styled.section`
  display: block;
  width: 450px;

  border-radius: 10px;
  border: 1px solid #9faab6;
  background-color: white;`;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 36px;
  text-align: center;`;

export const StatList = styled.ul`display: flex;`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;
  gap: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: black;
  `;

export const Label = styled.span`font-size: 20px;`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 500;`;