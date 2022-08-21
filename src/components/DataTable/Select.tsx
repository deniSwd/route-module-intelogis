import { Select } from 'antd'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  updateOrderWaypoints,
  selectWaypoints,
} from '../../store/dataTableSlice'
import { Order } from '../../MainTypes'

export type SelectedFieldProps = {
  defaultValue: string
  orderId: string
  order: Order
}

const { Option } = Select

export const SelectField: FC<SelectedFieldProps> = ({ defaultValue, orderId, order }) => {
  const wayPoints = useAppSelector(selectWaypoints)
  const dispatch = useAppDispatch()
  const handleChange = (value: string) => {
    dispatch(updateOrderWaypoints({ value, defaultValue, orderId }))
  }
  return (
    <Select defaultValue={defaultValue} style={{ width: 120 }} onChange={handleChange}>
      {Object.entries(wayPoints).filter(([id]) =>
        !order.includes(+id) || defaultValue === id).map(([id, waypoint], index) =>
        <Option value={id} key={id + index}>Точка {id}</Option>)}
    </Select>
  )
}