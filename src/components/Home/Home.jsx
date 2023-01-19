import React, { useState } from 'react'
import style from './home.module.sass'
import catPhoto from '../../assets/Photo.png'

const Home = props => {
  const [none, setNone] = useState(true)
  return (
    <div className={style.wrapper}>
      <h1>Ты сегодня покормил кота?</h1>
      <div className={style.container}>
        {props.data.map(data => (
          <div className={style.item_container} key={data.id}>
            <div className={style.item}>
              <div className={style.item_angle}></div>
              <div className={style.about}>{data.about}</div>
              <div className={style.name}>{data.name}</div>
              <div className={style.additive}>{data.additive}</div>
              <div className={style.about_text}>
                <div className={style.portions}>{data.portions}</div>
                <div className={style.bonus}>{data.bonus}</div>
              </div>
              <img src={catPhoto} alt="cat photo" className={style.catPhoto} />
              <div className={style.circle}>
                <div className={style.number}>{data.number}</div>
                <div className={style.weight}>{data.weight}</div>
              </div>
            </div>
            <div className={style.link}>
              {none ? data.link : `Печалька, ${data.additive} закончился `}
              <a href="#">{none ? data.link2 : ' '}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
