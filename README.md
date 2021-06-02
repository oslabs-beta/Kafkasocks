<h1 align ="center">Kafka Socks</h1>
<h3>Table of Contents</h3>

* [About](https://github.com/oslabs-beta/Kafkasocks/#About)
* [Getting Started](https://github.com/oslabs-beta/Kafkasocks/#Getting-Started])
* [Features](https://github.com/oslabs-beta/Kafkasocks/#Features)
* [Example](https://github.com/oslabs-beta/Kafkasocks/#Example)
* [Contributors](https://github.com/oslabs-beta/Kafkasocks/#Contributors)
* [License](https://github.com/oslabs-beta/Kafkasocks/#License)

<h3 href="#About">About</h3>

Kafka Socks is an easy-to-use and lightweight framework that combines Kafka consumer functionality with WebSockets to pipe the Kafka messages directly to the frontend client, in realtime. Kafka Socks abstracts away much of the boilerplate and setup of this oft-used Kafka-Websocket architecture, providing developers with a simple and intuitive set of classes to achieve a powerful result on the client-side.

The typical use case for the Kafka Socks library is rendering realtime data on a frontend client, but Kafka Socks framework is unopinionated and flexible enough to process realtime data in whatever way the developer may see fit.

Without a WebSocket, the only way a web client could access data consumed by the Kafka consumer on the server side would be fetch requests. Not only are fetch requests notoriously slow, browsers also limit the number of responded fetch requests a client may have at any given time (most browers set this limit below 10). In short, fetch requests could get the data to the frontend, but doing so would mean that the frontend would lose the ability to access this data in realtime; in applications where frontend rendering in realtime is necessary, fetch requests simply won't work.

Using the observer design pattern, WebSockets permit the server to pipe data in time because there is always an established and open link between the server and client. Kafka Socks did not invent this system design. In fact, it is a relatively common pattern to achieve realtime data processing on the frontend. Instead, Kafka Socks abstracts away the details of implementing this kafka-websocket design pattern, providing developers with an easy way to implement this pattern in a few lines of code.


<h3 href="#Features">Features</h3>

* Confluent 
    * Used to set up a connection with a Confluent.io cluster
* Consumer
    * Used to simply and intuitively set up as many (or as few) consumers needed
* Subject
    * Used to create a new subject to which consumers can subscribe

<h3>Getting Started</h3>

``` npm install kafka-socks ```

<h3 href="#Example">Example</h3>

Set up your Confluent.io connection using kafka-socks Confluent class.
```typescript
//kafka.ts 
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

```typescript
// producer.ts 
import { kafka } from './kafka' //imported from kafka.ts

const fs = require('fs');

const producer = kafka.producer()

const produce = async () => {

    await producer.connect();
    ...
    }
    
export { produce }
```

```typescript
//server.ts
require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

import { Consumer } from 'kafka-socks';
import { Subject } from 'kafka-socks';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

import { produce } from './producer'
import { kafka } from './kafka'

app.use(require("cors")());

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

produce().catch((error: any) => {
  console.log(error);
  process.exit(1);
})

const kafkaconsumer_1 = kafka.consumer({
  groupId: 'example-group-1'
})
const kafkaconsumer_2 = kafka.consumer({
  groupId: 'example-group-2'
})

const consumer_1 = new Consumer(kafkaconsumer_1, 'example-topic-1', 'example-message-1') //
const consumer_2 = new Consumer(kafkaconsumer_2, 'example-topic-2', 'example-message-2')
const example_subject = new Subject(io, 'example')
example_subject.add(consumer_1)
example_subject.add(consumer_2)

...

server.listen(PORT, () => {
  console.log(`Listening on port ${server.address().port}`);
});
```

<h3 href="#Contributors">Contributors</h3>

Kafka Socks is an open-source community project on Github. While the project is maintained by a small group of dedicated engineers (below), we are grateful to the community for bug fixes, feature development and other contributions. 

[Allison Jacobs @allisonIsCoding](https://github.com/allisonIsCoding)

[Jason Fricano @jfricano](https://github.com/jfricano)

[Jenessa Chapalamadugu @jenessachap](https://github.com/jenessachap)

[Vinit Patel @v-za](https://github.com/v-za)

We welcome contributions to Kafka Socks, but we also would love to see a thriving third-party ecosystem. If you are interest in creating an open-source project that builds on top of Kafka Socks, please don't hesitate to reach out, and we'd be happy to provide feedback and support.

<h3 href="#License">License</h3>

This product is licensed under the MIT License - see the LICENSE.md file for details.

This is an open source product. We are not affiliated nor endorsed by either the Apache Software Foundation or KafkaJS.

This product is accelerated by [OS Labs.](https://opensourcelabs.io/)

*Apache Kafka and Kafka are either registered trademarks or trademarks of The Apache Software Foundation in the United States and other countries. Kafka Socks has no affiliation with the Apache Software Foundation.*
