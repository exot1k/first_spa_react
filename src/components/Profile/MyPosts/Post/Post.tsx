import React, {FC} from 'react';
import s from './Post.module.css';
type propsType = {
    message:string | null
    like: number
    title:string
}
const Post: FC<propsType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div>
                <img
                    src={'https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png'}/>
                {props.message}
                </div>
                <div><span>like: {props.like} </span></div>

            </div>
        </div>
    );
}

export default Post;