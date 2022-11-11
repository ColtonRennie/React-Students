import React from 'react'
import Score from './Score'

const Students = ({ student }) => {
  console.log(student)

  return (
    <>
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      {student.scores.map((score, idx) => (
        <Score key={idx} score={score} />
      ))}
    </>
  )
}

export default Students
