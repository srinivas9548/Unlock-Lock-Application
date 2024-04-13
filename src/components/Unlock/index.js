import {useState} from 'react'

import {
  UnlockAppContainer,
  UnlockLockImage,
  UnlockLockText,
  UnlockLockButton,
} from './styledComponents'

const unlockImgUrl = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const lockImgUrl = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isLock, setIsLock] = useState(false)

  const imgUrl = isLock ? lockImgUrl : unlockImgUrl
  const altText = isLock ? 'unlock' : 'lock'
  const deviceStatus = isLock ? 'Unlocked' : 'Locked'
  const buttonText = isLock ? 'Lock' : 'Unlock'

  const onClickButton = () => {
    setIsLock(prevState => !prevState)
  }

  return (
    <UnlockAppContainer>
      <UnlockLockImage src={imgUrl} alt={altText} />
      <UnlockLockText>Your Device is {deviceStatus}</UnlockLockText>
      <UnlockLockButton type="button" onClick={onClickButton}>
        {buttonText}
      </UnlockLockButton>
    </UnlockAppContainer>
  )
}

export default Unlock
