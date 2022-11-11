import React from 'react'

const Score = ({ score }) => {
  return (
    <li>
      Date:&nbsp;{score.date} &nbsp; Grade:&nbsp;{score.score}
    </li>
  )
}

export default Score
