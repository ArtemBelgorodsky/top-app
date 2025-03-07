
import styles from './Button.module.css';
import {ButtonProps} from './Button.props'
import cn from 'classnames';

const Button = ({children, appearance, className, ...props}: ButtonProps): JSX.Element => {
            return (
              <button
              className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
              })}
              {...props}
              >
                {children}
            </button>
            );
        }

export default Button