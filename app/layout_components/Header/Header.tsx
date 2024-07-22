import {HeaderProps} from "./Header.props";
import cn from 'classnames';
import styles from './Header.module.css'


const Header = ({...props}: HeaderProps):JSX.Element => {
    return (
        <header {...props}>
            Header
        </header>
    )
}

export default Header;