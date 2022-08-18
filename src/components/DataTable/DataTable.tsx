import { Space, Switch, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface'
import React, {FC, useState} from 'react'
import s from './DataTable.module.scss'

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Имя заявки',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Номер',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
      },
    ]
  },
  {
    key: 2,
    name: 'John Brown',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 15,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 16,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 18,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
      },
    ]
  },
]

// rowSelection objects indicates the need for row selection
const rowSelection: TableRowSelection<DataType> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
}
export const DataTable:FC = () =>{
  const [checkStrictly, setCheckStrictly] = useState(false)

  return (
    <div className={s.dataTableWrap}>
      <Space align="center" style={{ marginBottom: 16 }}>
        CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
      </Space>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
      />
    </div>
  )
}