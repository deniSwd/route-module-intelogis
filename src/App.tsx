import React, {FC} from 'react'
import s from './App.module.scss'
import {DataTable} from './components/DataTable/DataTable'
import {Map} from './components/Map/Map'


export const App:FC = () => {
  return (
    <div className={s.app}>
      <DataTable/>
      <Map/>
    </div>
  )
}


