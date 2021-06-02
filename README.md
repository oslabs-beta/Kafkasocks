<h1 align ="center">Kafka Socks</h1>
<h3>Table of Contents</h3>

* [About](https://github.com/oslabs-beta/Kafkasocks/#About)
* [Getting Started](https://github.com/oslabs-beta/Kafkasocks/#Getting-Started])
* [Example](https://github.com/oslabs-beta/Kafkasocks/#Example)
* [Strategies](https://github.com/oslabs-beta/Kafkasocks/#Strategies)
* [Contributors](https://github.com/oslabs-beta/Kafkasocks/#Contributors)
* [License](https://github.com/oslabs-beta/Kafkasocks/#License)

<h3 href="#About">About</h3>

<h3>Getting Started</h3>

``` npm install kafka-socks ```

<h3 href="#Example">Example</h3>

```
//kafka.ts example
import { Confluent } from 'kafka-socks';

require('dotenv').config();

const API_KEY = `[your Apache Confluent.io API_KEY string here]`;
const API_SECRET = `[your Apache Confluent.io API_SECRET string here]`;
const KAFKA_BOOTSTRAP_SERVER = `[your Apache Confluent.io KAFKA_BOOTSTRAP_SERVER string here]`;

const kafka: { producer: Function; consumer: Function } = new Confluent(
    API_KEY,
    API_SECRET,
    KAFKA_BOOTSTRAP_SERVER
  ).create("client-id");

export { kafka };
```

<h3 href="#Strategies">Strategies</h3>
<h3 href="#Contributors">Contributors</h3>

[Allison Jacobs @allisonIsCoding](https://github.com/allisonIsCoding)

[Jason Fricano @jfricano](https://github.com/jfricano)

[Jenessa Chapalamadugu @jenessachap](https://github.com/jenessachap)

[Vinit Patel @v-za](https://github.com/v-za)

<h3 href="#License">License</h3>

This product is licensed under the MIT License - see the LICENSE.md file for details.

This is an open source product. We are not affiliated nor endorsed by either the Apache Software Foundation or KafkaJS.

This product is accelerated by [OS Labs.](https://opensourcelabs.io/)
