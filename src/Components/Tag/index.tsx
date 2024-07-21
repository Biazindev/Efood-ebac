import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string;
  className?: string;
}

const Tag = ({ children, size = 'small', className }: Props) => (
  <TagContainer size={size} className={className}>
    {children}
  </TagContainer>
)

export default Tag
