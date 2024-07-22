import { RatingProps } from "./Rating.props"
import cn from 'classnames';
import styles from './Rating.module.css'
import { useEffect, useState, KeyboardEvent } from "react";
import StarIcon from './star.svg';

const Rating = ({isEditable = false, rating, ratingmax = 5, setRating, className, ...props}: RatingProps):JSX.Element => {

    const [currentRating, setCurrentRating] = useState<number>(rating);
       
    useEffect(() => {
        setCurrentRating(rating);
    }, [rating]);

    const changeDispalay = (i:number) => {
        if (!isEditable) {
            return;
        }
      setCurrentRating(i);
    };

    const onClick = (i:number) => {
        if (!isEditable || !setRating) {
            return;
        }
      setRating(i);
    };

    const handleSpace = (i:number, e:KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
      setRating(i);
    };

    return (
        <div {...props}>
                {Array(ratingmax).fill(<></>).map((e, i) => (
                    <span 
                    
                    key={i}
                    onMouseEnter={() => changeDispalay(i + 1)}
                    onMouseLeave={() => changeDispalay(rating)}
                    onClick={() => onClick(i + 1)}>
                    <StarIcon 
                        className={cn(styles.star, {
                            [styles.filled]: i < currentRating,
                            [styles.editable]: isEditable })} 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}  
                    />
                    </span>
                ))}
            
        </div>
    )
}

export default Rating;