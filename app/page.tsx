'use client'

import { useState } from "react";
import { Button, Paragraf, Tag, Rating } from "../components";




export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  
 
  

  return (
    <>
  <Button appearance='ghost'>Узнать подробнее</Button>
  <Paragraf size="small">Маленький</Paragraf>
  <Paragraf size="medium">Средний</Paragraf>
  <Paragraf size="large">Большой</Paragraf>
  <Tag color="primary" size="m" href="/re">Ссылка</Tag>
  <Rating rating={rating} isEditable={true} ratingmax={5} setRating={setRating}/>
</>
  )
}
