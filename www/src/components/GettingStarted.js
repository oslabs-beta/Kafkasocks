import React from "react";
import clsx from "clsx";
import styles from "./GettingStarted.module.css";




export default function GettingStarted() {
  return (
    <section className={styles.start}>
      <div>
            <h3>Getting Started</h3>
                <li>npm install kafka-socks</li>
                <li>
                  Create an .env file with Kafka Key, Secret and Bootstrap
                  Server
                </li>
                <li>
                  Initiate a producer, consumer, and subject from Kafka socks
                  library
                </li>
      </div>
    </section>
  );
}
