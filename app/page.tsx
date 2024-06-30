import { Htag, Button, Paragraf } from "../components";
import Logo from '../public/vercel.svg'
import styles from "./page.module.css";



export default function Home(): JSX.Element {


  return (
    <>
  <Htag tag='h1'>Текст</Htag>
  <Button appearance='primary'>Узнать подробнее</Button>
  <Button appearance='ghost'>Узнать подробнее</Button>
  <Paragraf size="small">Маленький</Paragraf>
  <Paragraf size="medium">Средний</Paragraf>
  <Paragraf size="large">Большой</Paragraf>
</>
  )
}
