import React from 'react'
import InputChoose from '../InputChoose/InputChoose'
import DayCardList from '../DayCardList/DayCardList'
import ThemeButton from '../ThemeButton/ThemeButton'
import {useSelector} from 'react-redux'

function Content() {
  const theme = useSelector((state) => state.app.theme)
  
  return (
    <div className={`container ${theme}`}>
        <div className='toglleBtn'>
        <InputChoose /> 
        <ThemeButton />
        </div>
        <div className='content'>
        <DayCardList />
        </div>
    </div>
  )
}

export default Content