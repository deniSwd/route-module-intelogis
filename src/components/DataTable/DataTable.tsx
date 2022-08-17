import React, {FC, useState} from 'react'
import {Button, Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import s from './DataTable.module.scss'


interface DataType {
  key: React.Key
  routeName: string
  type: number
  address: string
  locationX: string
  locationY: string
}

const data: DataType[] = [];
for (let i = 0; i < 25; i++) {
  data.push({
    key: i,
    routeName: `Edward King ${i}`,
    type: 32,
    address: `London, Park Lane no. ${i}`,
    locationX: `${Math.random() *100}`,
    locationY: `${Math.random() *100}`
  })
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Route Name',
    dataIndex: 'routeName',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Location X',
    dataIndex: 'locationX',
  },
  {
    title: 'Location Y',
    dataIndex: 'locationY',
  },
];

export const DataTable:FC = () =>{
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0


  return (
    <div className={s.dataTableWrap}>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table  size={"large"} rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}