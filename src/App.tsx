import React, {FC, useEffect} from 'react'
import s from './App.module.scss'
import {DataTable} from './components/DataTable/DataTable'
import {Map} from './components/Map/Map'
import {useAppDispatch} from "./app/hooks";
import {sagaActions} from "./app/saga";


export const App:FC = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch({type: sagaActions.WAY_POINTS_SAGA})
    dispatch({type: sagaActions.ORDERS_SAGA})
  },[dispatch])

  return (
    <div className={s.app}>
      <DataTable/>
      <Map/>
    </div>
  )
}


