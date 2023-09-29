import { cardObject } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import styles from './exercisecontainer.module.scss'


const ExerciseContainer = ({ ...props }: cardObject) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <Image src={props.img} alt={props.title}  width={300} height={300} layout='responsive'/>
      </div>
      <div>
        <h3>Исходное положение</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <h3>{props.subtitle}</h3>
        <ol>
          {props.actionList?.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <div>
        <Image src={props.imgSecond} alt={props.subtitle} width={300} height={300} />
        <p>{props.descriptionSecond}</p>
      </div>
      <div>
        <h3>Видео выполнения упражнения</h3>
        <div dangerouslySetInnerHTML={{ __html: props.videoUrl}}></div>
      </div>
    </div>
  )
}

export default ExerciseContainer