import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

export default function Hore() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ihsan-image.png'
          alt='image Muhammad Ihsan'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ihsan</h1>
      <p>
        My blog about web development - especially frontend framework like React
      </p>
    </section>
  );
}
