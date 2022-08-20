import {Space, Switch, Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import type {TableRowSelection} from 'antd/es/table/interface'
import React, {FC, useMemo, useState} from 'react'
import s from './DataTable.module.scss'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {displayingOrder, selectOrders} from "../../app/dataTableSlice";
import {SelectField} from "./Select";

export interface DataType {
  key: React.ReactNode
  name: string | React.ReactNode
  client: string
  children?: DataType[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Имя заявки',
    dataIndex: 'name',
    width: '35%',
    key: 'name',
  },
  {
    title: 'Клиент',
    dataIndex: 'client',
    width: '65%',
    key: 'client',
  },
];


// rowSelection objects indicates the need for row selection

export const DataTable: FC = () => {
  const [checkStrictly, setCheckStrictly] = useState(true)
  const dispatch = useAppDispatch()

  const orders = useAppSelector(selectOrders)

  const rowSelection: TableRowSelection<DataType> = {
    onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      dispatch(displayingOrder(record.key as number))
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      // console.log(selected, selectedRows, changeRows);
    },
  }
  const tableData: DataType[] = useMemo(() => {
    return orders.map(order => ({
      ...order,
      children: order.children.map((point, index) => ({
        key: `${order.key}${index}`,
        name: <SelectField defaultValue={point?.name ?? 'unknown'}/>,
        client: point?.location.join(' , ') ?? 'unknown'
      }))
    }))
  }, [orders])
  return (
    <div className={s.dataTableWrap}>
      <Space align="center" style={{marginBottom: 16}}>
        CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly}/>
      </Space>
      <Table
        size={"middle"}
        columns={columns}
        rowSelection={{...rowSelection, checkStrictly}}
        dataSource={tableData}
        className={s.table}
      />
    </div>
  )
}