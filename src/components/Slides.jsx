import React from 'react'
import { useEffect } from "react";
import fs from 'fs'
import path from 'path'
import { padding } from '@mui/system';

function Slides({ navigate, metadata }) {

    // get table column
    let c = 3

    console.log('ffffffff', metadata);

    let data = fs.readFileSync(path.join(__dirname,'./../videoOutput/vid3.webm.mp4.json.final.json.summarized.json'))
    let summeries = JSON.parse(data)
    console.log(summeries)

    let images = [];
    fs.readdirSync(
        path.join(__dirname,'./../output/vid3.webm.mp4')
        ).forEach(file => {
        console.log(file);
        images.push(path.join(__dirname,'./../output/vid3.webm.mp4',file))
    });
    console.log(images)

    let List = []
    for (let index = 0; index < images.length; index++) {
        const element = images[index];
        List.push(
            <div className="card mb-2">
            <div key={index} className="card-img-top">
            <img src={images[index]} style={{width:'100%'}}></img>
            <p style={{fontSize:'1.2rem', paddingBottom:'1rem', padding:'0.61rem', fontWeight:'1200'}}>{summeries[index]}  </p>
            </div>
            </div>
        )
    }

    return (

        <div className='col'>
            <div className='p-4 '>
            {List}
            </div>
        </div >
    )
}
export default Slides;