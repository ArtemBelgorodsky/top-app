import {FooterProps} from "./Footer.props";
import cn from 'classnames';
import styles from './Footer.module.css'
import Link from "next/link";
import {format} from 'date-fns'


const Footer = ({...props}: FooterProps):JSX.Element => {
    return (
        <footer {...props}>
           <div>OwlTOP {format(new Date(), 'yyyy')} Все права защищены</div>
           <div><Link href="" className={cn(styles.link)}>Пользовательское соглашение</Link></div>
           <div><Link href="" className={cn(styles.link)}>Политика конфиденциальности</Link></div>
        </footer>
    )
}

export default Footer;