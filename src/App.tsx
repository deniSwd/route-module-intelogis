import React, {FC, ReactNode, useEffect} from 'react'
import s from './App.module.scss'
import {DataTable} from './components/DataTable/DataTable'
import {Map} from './components/Map/Map'
import {useAppDispatch} from './app/hooks'
import {sagaActions} from './app/saga'
import Split from 'react-split'

export const App: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch({type: sagaActions.WAY_POINTS_SAGA})
    dispatch({type: sagaActions.ORDERS_SAGA})
  }, [dispatch])

  return (
    <Split className={s.app}
           minSize={[400, 450]}
           maxSize={[1440, 1440]}
           direction={'horizontal'}
           gutterSize={0}
    sizes={[45, 55]}>
      <DataTable/>
      <Map/>
    </Split>
  )
}


