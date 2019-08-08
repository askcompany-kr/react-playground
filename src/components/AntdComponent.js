import React from 'react';
import Button from 'antd/es/button';
import Table from 'antd/es/table';


const TableContainer = () => {
    const dataSource = [];
    for(let i=0; i<100; i++) {
        dataSource.push({
            key: i,
            name: `Mike #${i}`,
            age: 32,
            address: '10 Downing Street'
        });
    }

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
    ];
    return <Table dataSource={dataSource} columns={columns} />;
};


const AntdComponent = () => {
    return (
        <div>
            <h2>antd</h2>
            <Button>Button</Button>
            <Button type="primary">Primary Button</Button>
            <hr/>
            <TableContainer />
        </div>
    );
};


export default AntdComponent;
