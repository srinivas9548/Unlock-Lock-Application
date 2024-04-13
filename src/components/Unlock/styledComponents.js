import styled from 'styled-components'

export const UnlockAppContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const UnlockLockImage = styled.img`
  width: 80px;
`
export const UnlockLockText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
  line-height: 1.5;
`
export const UnlockLockButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #e2e8f0;
  font-weight: 500;
  background-color: #06b6d4;
  border-radius: 8px;
  padding: 6px 12px;
  margin-top: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 90px;
    padding: 8px 16px;
  }
`
