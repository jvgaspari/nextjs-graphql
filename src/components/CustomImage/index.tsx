import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

interface StyledImageProps extends ImageProps {
  borderRadius?: string
}

const StyledImage = styled(Image)<StyledImageProps>`
  border-radius: ${(props) => props.borderRadius};
`

const CustomImage: React.FC<StyledImageProps> = ({
  borderRadius,
  ...props
}) => {
  return <StyledImage borderRadius={borderRadius} {...props} />
}

export default CustomImage
