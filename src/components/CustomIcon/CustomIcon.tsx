import {CustomIconProps} from "./types"
import {StyledIcon} from "./styles"


const CustomIcon: React.FC<CustomIconProps> = ({ icon: Icon }) => {
  return (
    <StyledIcon>
      <Icon fontSize="large" />
    </StyledIcon>
  )
}

export default CustomIcon
