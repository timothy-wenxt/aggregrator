import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const id = useSelector(state => state?.id?.id);

    // useEffect(() => {
    //     console.log("ID : ", id)
    // }, [])

    return (
        <div className='dashboard'>
            <p>Dashboard</p>
        </div>
    )
}

export default Dashboard
