import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";




export default function GettingStarted() {
  return (
    <section className={styles.features}>
      <div className="getting-started">
            <h3>Getting Started</h3>
            <p>
              <ul>
                <li>npm install kafka-socks</li>
                <li>
                  Create an .env file with Kafka Key, Secret and Bootstrap
                  Server
                </li>
                <li>
                  Initiate a producer, consumer, and subject from Kafka socks
                  library
                </li>
              </ul>
            </p>
      </div>
    </section>
  );
}
