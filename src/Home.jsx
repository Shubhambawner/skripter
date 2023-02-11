import React from "react";
// import Sound_visual from './ReactMicModule';
// import Sidenav from './Sidenav'
import styles from "./home.module.css";

export default function Home() {
  return (
      <div className={styles.containers}>
        <div className={styles.previewCont}></div>
        <div className={styles.action_container}>
          <div className={styles.audio}>
            {/* <Sound_visual /> */}
            </div>
          <div className={styles.action}>
            <div class={styles.btn_group}>
              <button >Start Recording</button>
              <button >Stop Recording</button>
              <button >Extract PPT</button>
              <button >Extract Transcripted file</button>
            </div>
          </div>
        </div>
      </div>
  );
}
