import {Select} from 'antd'
import React, {FC} from 'react'
import {useAppSelector} from "../../app/hooks";
import {selectWayPoints} from "../../app/dataTableSlice";

type SelectedFieldProps ={
  defaultValue:string
}
const {Option} = Select

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
};

export const SelectField: FC<SelectedFieldProps> = ({defaultValue}) => {
  const wayPoints = useAppSelector(selectWayPoints)
  return (
    wayPoints?.length > 0 ? <Select defaultValue={defaultValue} style={{width: 120}} onChange={handleChange}>
      {wayPoints.map((p, i) => <Option value={p.name} key={i}>{p.name}</Option>)}
    </Select> : <span>'Loading...'</span>
  )
}