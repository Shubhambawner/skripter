import React from 'react';
import styles from './about.module.css';
import abouts from './abouts.gif'

export default function About() {
  return (
    <div className={styles.container}>
        <div className={styles.infor}>
     <h1>About Us</h1>
     <h3>Scripter</h3>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum pariatur quidem quo, eligendi aperiam deleniti, veritatis soluta illo iusto quibusdam alias quae, explicabo ullam molestiae? Quaerat corporis iure illum numquam voluptatibus consectetur necessitatibus quasi odio nam saepe iusto, quibusdam sed repudiandae dolor dolore nobis sint, animi soluta enim minus ab.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat minima non perferendis. Modi quam eveniet, voluptas, officiis similique provident ducimus non vitae necessitatibus illo eius tenetur illum sint ad quos, dicta recusandae quidem tempore nihil quisquam itaque! Aperiam quibusdam iusto corrupti optio harum laboriosam repellat odio, eos saepe, possimus accusamus, quam reiciendis dolor rem expedita? Minima ducimus odio iure, possimus repellat distinctio. Aliquam itaque voluptatum voluptates ad non ipsum blanditiis fugiat dicta unde tempore voluptatibus temporibus commodi asperiores, fuga, dolorem animi, qui neque. Possimus provident ullam optio itaque sit porro harum dolorem qui tempora, quod, quae iusto, numquam nam!</p>
      </div>
  <div className={styles.aboutlogo}><img src={abouts} alt="" /></div>
  
    </div>
  )
}
