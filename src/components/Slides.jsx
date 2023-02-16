import React from "react"
import { useEffect } from "react";
import fs from "fs"
import path from "path"
import { padding } from "@mui/system";

function Slides({ navigate, metadata }) {

    console.log(`ffffffff`, metadata);

    let seqenceNo = localStorage.getItem(`seqenceNo`)
    seqenceNo--;
    let yPath = path.join(__dirname,`./../videoOutput/vid${seqenceNo}.webm.mp4.json.final.json.summarized.json`)
    console.log(yPath);
    if(!seqenceNo || ! fs.existsSync(yPath)){
        return `yet to record video...`
    }
    let data = fs.readFileSync(yPath)
    let summeries = JSON.parse(data)
    console.log(summeries)

    let images = [];
    fs.readdirSync(
        path.join(__dirname,`./../output/vid${seqenceNo}.webm.mp4`)
        ).forEach(file => {
        console.log(file);
        images.push(path.join(__dirname,`./../output/vid${seqenceNo}.webm.mp4`,file))
    });
    console.log(images)

    let List = []
    for (let index = 1; index < images.length; index++) {
        const element = images[index];
        List.push(
            <div className="card mb-2">
            <div key={index} className="card-img-top">
            <img src={images[index]} style={{width:`100%`}}></img>
            <p style={{fontSize:`1.2rem`, paddingBottom:`1rem`, padding:`0.61rem`, fontWeight:`1200`}}>{summeries[index]}  </p>
            </div>
            </div>
        )
    }

    return (

        <div className="col">
            <div className="p-4 ">
            {List}
            </div>
        </div >
    )
}
export default Slides;