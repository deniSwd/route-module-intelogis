import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface'
import React, { FC, ReactElement } from 'react'
import s from './DataTable.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { displayingOrder, displayingWaypoint, resetDisplayingWaypoint } from '../../store/dataTableSlice'
import { TableType } from '../../MainTypes'
import { useTableOrders } from '../../hooks'
import { SelectedFieldProps } from './Select'

const columns: ColumnsType<TableType> = [
  {
    title: 'Имя заявки',
    dataIndex: 'name',
    width: '36%',
    key: 'name',
  },
  {
    title: 'Координаты точки',
    dataIndex: 'point',
    key: 'point',
  },
]

export const DataTable: FC = () => {
  const dispatch = useAppDispatch()

  const rowSelection: TableRowSelection<TableType> = {

    onSelect: (record, selected) => {
      selected && dispatch(displayingOrder(record.key?.toString() ?? '0'))
      const node = record.name as ReactElement<SelectedFieldProps>
      if (!node.props) {
        dispatch(resetDisplayingWaypoint())
        return
      }
      const selectedWaypoint = node.props.defaultValue
      selected && selectedWaypoint && dispatch(displayingWaypoint(selectedWaypoint))
    },
  }

  const tableData = useTableOrders()
  return (
    <div className={s.dataTableWrap}>
      <Table
        size={'middle'}
        columns={columns}
        rowSelection={{ type: 'radio', ...rowSelection }}
        dataSource={tableData}
        className={s.table}
      />
    </div>
  )
}