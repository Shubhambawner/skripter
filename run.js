const { exec } = require("child_process");
let Path = "rec3.webm"
const { execSync } = require("child_process");
let fs = require("fs")

function processVideo(Name, callBackFn) {


    // let screenshot_dir = `output\\${Path}`

    // let screenshot_dir = "output\\" + Name
    
    // const { exec } = require("child_process");
    
    // let Path = "vid3.webm"
    let Path = 'videoOutput\\' + Name

    if(!verifyPathExists(Path)){
        return false;
    }else{
        console.log('Recording finished successfully, processing...','Phase 0/5 done');
    }

    let mp4path = Path + '.mp4'
    let screenshot_dir = `output\\${Name + '.mp4'}`
    // subprocess.Popen(["./ffmpeg", "-y", "-i", video_path, mp4Path]).wait()

    try {
        const output = execSync(`ffmpeg -y -i ${Path} ${mp4path}`).toString();
        console.log("Phase 1/5 done:");
    } catch (error) {
        console.error("Error: ", error);
    }

    try {
        const output = execSync(`dist\\Combined\\videotopngs.exe ${mp4path}`).toString();
        console.log("Phase 2/5 done:");
    } catch (error) {
        console.error("Error: ", error);
    }

    try {
        const output = execSync(`dist\\Combined\\sendVidToServer.exe ${mp4path}`).toString();
        console.log("Phase 3/5 done:");
    } catch (error) {
        console.error("Error: ", error);
    }

    try {
        const output = execSync(`dist\\Combined\\getFinalStrArray.exe ${mp4path}.json ${screenshot_dir}`).toString();
        console.log("Phase 4/5 done:");
    } catch (error) {
        console.error("Error: ", error);
    }

    try {
        const output = execSync(`dist\\Combined\\txtTosummarize.exe ${mp4path}.json.final.json`).toString();
        console.log("Phase 5/5 done:");
    } catch (error) {
        console.error("Error: ", error);
    }

    fs.unlinkSync(`${mp4path}.json`);
    fs.unlinkSync(`${mp4path}.json.final.json`);

}

// exec(`dist\\Combined\\videotopngs.exe ${Path}`, (error, stdout, stderr) => {
//     console.log("videotopngs");
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     exec(`dist\\Combined\\sendVidToServer.exe ${Path}`, (error, stdout, stderr) => {
//         console.log("sendVidToServer");
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);

//         exec(`dist\\Combined\\getFinalStrArray.exe ${Path}.json ${screenshot_dir}`, (error, stdout, stderr) => {
//             console.log("getFinalStrArray");
//             if (error) {
//                 console.log(`error: ${error.message}`);
//                 return;
//             }
//             if (stderr) {
//                 console.log(`stderr: ${stderr}`);
//                 return;
//             }
//             console.log(`stdout: ${stdout}`);

//             exec(`dist\\Combined\\txtTosummarize.exe ${Path}.json.final.json`, (error, stdout, stderr) => {
//                 console.log("getFinalStrArray");
//                 if (error) {
//                     console.log(`error: ${error.message}`);
//                     return;
//                 }
//                 if (stderr) {
//                     console.log(`stderr: ${stderr}`);
//                     return;
//                 }
//                 console.log(`stdout: ${stdout}`);
//                 callBackFn?.()
//             })

//         })
//     })
// })

function verifyPathExists(Path){
    let t  = fs.existsSync(Path)
    console.log(t, `verifyPathExists`);
    if(!t){
        return false
    }else return true
}

module.exports = processVideo



