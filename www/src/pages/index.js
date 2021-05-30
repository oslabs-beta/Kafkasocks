import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import GettingStarted from '../components/GettingStarted';
import Team from '../components/Team';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <div className="parent">
  {/* <img className="image1" src="../static/img/KS-logo.png" /> */}
  {/* <img className="rotate" src="../static/img/KS-logo-spin.png" /> */}
  <img className="rotate" src="../static/img/Kafkasocks-full-logo.png" />

</div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        <GettingStarted />
        <Team />
    </Layout>
  );
}
