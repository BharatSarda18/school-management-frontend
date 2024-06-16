import React, { useState } from 'react';
import { Table } from 'antd';

const TableLayout = ({columns,rows,selectedRowKeys,onSelectChange}) => {
   
    const rowSelection = { selectedRowKeys, onChange: onSelectChange};
    
    return (
        <>
            <Table rowSelection={rowSelection} columns={columns} dataSource={rows} />
        </>
    );
};
export default TableLayout;