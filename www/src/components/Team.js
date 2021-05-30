import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const TeamList = [
  {
    title: 'Allison Jacobs',
    Svg: require('../../static/img/allison.svg').default,
    description: (
      <>
      Github
      </>
    ),
  },
  {
    title: 'Jason Fricano',
    Svg: require('../../static/img/jason.svg').default,
    description: (
      <>
Github
      </>
    ),
  },
  {
    title: 'Jenessa Chapalamadugu',
    Svg: require('../../static/img/jenessa.svg').default,
    description: (
      <>
Github      </>
    ),
  },
  {
    title: 'Vinit Patel',
    Svg: require('../../static/img/vinit.svg').default,
    description: (
      <>
Github
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="team">
          {TeamList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
