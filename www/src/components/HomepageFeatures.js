import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/data-collection.svg').default,
    description: (
      <>
        Kafka Socks is a simple npm install package that allows you to easily connect your Kafka cluster to Websockets
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/programing.svg').default,
    description: (
      <>
       Build by developers with developers in mind. Giving you freedom to make decision on how you handle streaming data.
      </>
    ),
  },
  {
    title: 'Quick set up',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        After you enter your Kafka key, secret and bootstrap in the .env file, you have the power toonnect your producer, consumer and websocket in 3 easy lines of code. 
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
