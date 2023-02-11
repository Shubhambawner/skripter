import React from 'react'
import { useEffect } from "react";
import TableData from "./TableData.js";
function handleClick() {
    // write the funciton that will download the ppt and transcript files
}
function Records() {

    // get table column
    const column = Object.keys(TableData[0]);

    // get table heading data
    const ThData = () => {

        return column.map((data) => {
            return <th className='display-6' key={data}>{data}</th>
        })
    }

    // get table row data
    const tdData = () => {

        return TableData.map((data) => {
            return (

                <tr className='p-1 fs-5 '>
                    {
                        column.map((v) => {
                            return <td>{data[v]}</td>
                        })
                    }
                    <td className='p-4 d-flex justify-content-evenly'>
                        <button onClick={handleClick} type="button" class="btn btn-primary mr-1">Original Text</button>
                        <button onClick={handleClick} type="button" class="btn btn-primary">PPT</button>
                    </td>
                </tr >
            )
        })
    }


    return (

        <div className='col'>
            <div className='p-4 '>
                <table className="table table-hover table-bordered text-center">
                    <thead className=''>
                        <tr className=' bg-warning'>{ThData()}
                            <td className='display-6'>Action</td></tr>
                    </thead>
                    <tbody>
                        {tdData()}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
export default Records;