import React from 'react'
import { useEffect } from "react";
import TableData from "./TableData";
function handleClick() {
    // write the funciton that will download the ppt and transcript files
}
function Records() {

    // get table column
    const column = Object.keys(TableData[0]);

    // get table heading data
    const ThData = () => {

        return column.map((data) => {
            return <th className='fs-3' key={data}>{data}</th>
        })
    }

    // get table row data
    const tdData = () => {

        return TableData.map((data) => {
            return (
                <tr className=''>
                    {
                        column.map((v) => {
                            return <td className=' p-1 fs-5  align-middle'>{data[v]}</td>
                        })
                    }
                    <td className='p-4 d-flex justify-content-evenly'>
                        <button onClick={handleClick} type="button" class="btn btn-primary mr-1 px-3 py-2 ">Transcript</button>
                        <button onClick={handleClick} type="button" class="btn btn-success px-3 py-2">Summary</button>
                        <button onClick={handleClick} type="button" class="btn btn-primary px-3 py-2">Smart Notes</button>
                    </td>
                </tr >
            )
        })
    }


    return (

        <div className='col'>
            <div className='p-4 '>
                <table className="table table-hover text-center table-striped">
                    <thead className=''>
                        <tr className='bg-warning'>
                            {ThData()}
                            <th className='fs-3'>View</th></tr>
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