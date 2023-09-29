import ExerciseContainer from '@/components/ExerciseContainer/ExerciseContainer'
import { cards } from '@/data/data'
import React from 'react'

type Props = {
  params : {
    id: number
  }
}

const Exercise = ({ params: { id }}: Props) => {
  const card = cards.find((card) => card.id === Number(id))

  return (
    <div>
      {card ? <ExerciseContainer {...card} /> : <div>Упражнение не найдено</div>}
    </div>
  )
}

export default Exercise