import { ParagrafProps } from "./Paragraf.props";
import cn from 'classnames';
import styles from './Paragraf.module.css'



const Paragraf = ({children, size = 'small', className, ...props}: ParagrafProps):JSX.Element => {
  return(
<p className={cn(styles.paragraf, className, {
    [styles.small]: size == 'small',
    [styles.medium]: size == 'medium',
    [styles.large]: size == 'large',

})}
{...props}>
    {children}
</p>
  )
  
}

export default Paragraf