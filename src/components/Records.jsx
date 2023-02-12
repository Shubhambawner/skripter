import React from 'react'
import { useEffect } from "react";
import TableData from "./TableData";
function handleClick() {
    // write the funciton that will download the ppt and transcript files
}
function Records({navigate}) {

    // get table column
    const column = Object.keys(TableData[0]);

    // get table heading data
    const ThData = () => {

        return column.map((data) => {
            return <th className='fs-3' key={data}>{data}</th>
        })
    }

    let c = localStorage.getItem('c')
    let rows = []
    for (let a=0;a<=c;a--) {
        rows.push(
            <tr className=''>
                <td className='p-4 d-flex justify-content-evenly'>
                    <button onClick={()=>{handleClick(a)}} type="button" class="btn btn-primary px-3 py-2">Smart Notes {a}</button>
                </td>
            </tr >)
    }

    function handleClick(c){
        navigate('slides',c)
    }


    return (

        <div className='col'>
            <div className='p-4 '>
            {rows}
            </div>
        </div >
    )
}
export default Records;