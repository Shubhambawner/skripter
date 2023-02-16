import React from "react";
// import Sound_visual from './ReactMicModule';
// import Sidenav from './Sidenav'
import styles from "./home.module.css";
import { desktopCapturer, ipcRenderer, remote } from 'electron'
import domify from 'domify'
import path from 'path'
import { exec } from 'child_process';
import processVideo from '../../run.js'


export default function Home() {

  ipcRenderer.on('source-id-selected', (event, sourceId) => {
    // Users have cancel the picker dialog.
    if (!sourceId) return
    console.log(sourceId)
    onAccessApproved(sourceId)
  })

  let localStream
  let microAudioStream
  let recordedChunks = []
  let numRecordedChunks = 0
  let recorder
  let includeMic = false

  const disableButtons = () => {
    document.querySelector('#record-desktop').hidden = true
    // document.querySelector('#record-camera').disabled = true
    // document.querySelector('#record-window').disabled = true
    document.querySelector('#record-stop').hidden = false
    // document.querySelector('#download-button').hidden = true
  }

  const enableButtons = () => {
    document.querySelector('#record-desktop').hidden = false
    // document.querySelector('#record-camera').disabled = false
    // document.querySelector('#record-window').disabled = false
    document.querySelector('#record-stop').hidden = true
    // document.querySelector('#download-button').hidden = true
  }

  const microAudioCheck = () => {
    includeMic = !includeMic
    console.log('Audio =', includeMic)

    if (includeMic) {
      navigator.webkitGetUserMedia({ audio: true, video: false },
        getMicroAudio, getUserMediaError)
    }
  }




  const cleanRecord = () => {
    recordedChunks = []
    numRecordedChunks = 0
  }

  const recordDesktop = () => {
    cleanRecord()
    console.log('kkkkk')
    ipcRenderer.send('show-picker', { types: ['screen'] })
    microAudioCheck()
  }

  const recorderOnDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      recordedChunks.push(event.data)
      numRecordedChunks += event.data.byteLength
    }
  }

  const stopRecording = () => {
    console.log('Stopping record and starting download')
    enableButtons()
    recorder.stop()
    localStream.getVideoTracks()[0].stop()
    download()
  }

  const download = () => {
    let blob = new Blob(recordedChunks, { type: 'video/webm' })
    let url = URL.createObjectURL(blob)
    let a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = url

    let seqenceNo = localStorage.getItem('seqenceNo')
    if (!seqenceNo) {
      seqenceNo = 1;
      localStorage.setItem('seqenceNo', 1)
    }
    let name = `vid${seqenceNo}.webm`
    localStorage.setItem('seqenceNo', ++seqenceNo)

    a.download = name
    a.click()
    setTimeout(function () {
      console.log(name, ';;;;;;')
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
      scriptPdf(name)
    }, 5000)
  }
  let num = 0;

  function scriptPdf(Path) {
    console.log(Path);
    processVideo(Path)
  }

  const getMediaStream = (stream) => {
    localStream = stream
    stream.onended = () => { console.log('Media stream ended.') }

    let videoTracks = localStream.getVideoTracks()

    if (includeMic) {
      console.log('Adding audio track.')
      let audioTracks = microAudioStream.getAudioTracks()
      localStream.addTrack(audioTracks[0])
    }
    try {
      console.log('Start recording the stream.')
      recorder = new MediaRecorder(stream)
    } catch (e) {
      console.assert(false, 'Exception while creating MediaRecorder: ' + e)
      return
    }
    recorder.ondataavailable = recorderOnDataAvailable
    recorder.onstop = () => { console.log('recorderOnStop fired') }
    recorder.start()
    console.log('Recorder is started.')
    disableButtons()
  }

  const getMicroAudio = (stream) => {
    console.log('Received audio stream.')
    microAudioStream = stream
    stream.onended = () => { console.log('Micro audio ended.') }
  }

  const getUserMediaError = () => {
    console.log('getUserMedia() failed.')
  }

  const onAccessApproved = (id) => {
    if (!id) {
      console.log('Access rejected.')
      return
    }
    console.log('Window ID: ', id)
    navigator.webkitGetUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop', chromeMediaSourceId: id,
          maxWidth: window.screen.width, maxHeight: window.screen.height
        }
      }
    }, getMediaStream, getUserMediaError)
  }


  return (


    <div className={styles.containers}>
      <button onClick={recordDesktop} id="record-desktop" title="Record Desktop">
        Record Desktop
      </button>
      <button onClick={stopRecording} id="record-stop" hidden="true">Stop Recording</button>
    </div>

  );
}

