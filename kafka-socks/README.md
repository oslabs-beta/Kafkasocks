<p align="center">
<img src="https://user-images.githubusercontent.com/76595505/120492529-2645a880-c388-11eb-8533-779b6770b243.png" width="250" />
</p>
<h1 align ="center">Kafka Socks</h1>
<p align="center">An easy-to-use, lightweight KafkaJS-to-Socket.io library for connecting and visualizing data in realtime.</p>
<p align="center">
<img id="MIT-License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?" />
<img id="MIT-License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?" />
</p>
<h2>Table of Contents</h2>

- [About](https://github.com/oslabs-beta/Kafkasocks/#About)
- [Features](https://github.com/oslabs-beta/Kafkasocks/#Features)
- [Getting Started](https://github.com/oslabs-beta/Kafkasocks/#Getting-Started])
- [Example](https://github.com/oslabs-beta/Kafkasocks/#Example)
- [Contributors](https://github.com/oslabs-beta/Kafkasocks/#Contributors)
- [License](https://github.com/oslabs-beta/Kafkasocks/#License)

<h2 href="#About">About</h2>

Kafka Socks is an easy-to-use and lightweight framework that combines Kafka consumer functionality with WebSockets to pipe the Kafka messages directly to the frontend client, in realtime. Kafka Socks abstracts away much of the boilerplate and setup of this oft-used Kafka-Websocket architecture, providing developers with a simple and intuitive set of classes to achieve a powerful result on the client-side.

The typical use case for the Kafka Socks library is rendering realtime data on a frontend client, but Kafka Socks framework is unopinionated and flexible enough to process realtime data in whatever way the developer may see fit.

Without a WebSocket, the only way a web client could access data consumed by the Kafka consumer on the server side would be fetch requests. Not only are fetch requests notoriously slow, browsers also limit the number of responded fetch requests a client may have at any given time (most browers set this limit below 10). In short, fetch requests could get the data to the frontend, but doing so would mean that the frontend would lose the ability to access this data in realtime; in applications where frontend rendering in realtime is necessary, fetch requests simply won't work.

Using the observer design pattern, WebSockets permit the server to pipe data in time because there is always an established and open link between the server and client. Kafka Socks did not invent this system design. In fact, it is a relatively common pattern to achieve realtime data processing on the frontend. Instead, Kafka Socks abstracts away the details of implementing this kafka-websocket design pattern, providing developers with an easy way to implement this pattern in a few lines of code.

<h2 href="#Features">Features</h2>

- Confluent : A singleton class used to instantiate a Kafka Cluster object using cluster hosted by Confluent.io</br></br>
- Consumer: A wrapper around a kafkaJS Consumer object, instantiate as many (or as few) consumers as needed</br></br>
- Subject: Used to create a new Kafka Socks Subject, which pipes the messages consumed by the Kafka consumers to the specified websocket namespace

<h2>Getting Started</h2>

Install Kafka Socks as an npm module and save it to your package.json as a dependency.

`npm install kafka-socks`

Once installed, you can now require the modules necessary to implement Kafka Socks:

`import { Confluent, Consumer, Subject } from 'kafka-socks';`

<h2 href="#Example">How to Use</h2>

1. Import the library classes needed:

```javascript
import { Confluent, Consumer, Subject } from 'kafka-socks';
```

2. Instantiate a websocket server.  (Done here using socket.io to wrap around an express server):

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

```

3. Instantiate the Kafka Cluster object using the Kafka Socks Confluent class:

```javascript
const kafka = new Confluent(
    API_KEY,
    API_SECRET,
    KAFKA_BOOTSTRAP_SERVER
  )
  .create("client-id");

```

4. Instantiate Kafka Socks Consumer object - you can create as many as you need:
 ```javascript
 const kafkaConsumer = kafka.consumer({ groupId: 'your-groupId-here' });
 const kafkaSocksConsumer = new Consumer(kafkaConsumer, 'kafka-topic', 'websocket-event-ID')
 ```

5. Link the Kafkasocks Consumers with websocket namespaces for the front end:
```javascript
const kafkaSocksSubject = new Subject(io, 'websocket-namespace-ID')
```

6. Then simply set up your WebSocket listener on the front end using your favorite WebSockets framework!

<h2 href="#Contributors">Contributors</h2>

Kafka Socks is an open-source community project on Github. While the project is maintained by a small group of dedicated engineers (below), we are grateful to the community for bug fixes, feature development and other contributions.

[Allison Jacobs @allisonIsCoding](https://github.com/allisonIsCoding)

[Jason Fricano @jfricano](https://github.com/jfricano)

[Jenessa Chapalamadugu @jenessachap](https://github.com/jenessachap)

[Vinit Patel @v-za](https://github.com/v-za)

We welcome contributions to Kafka Socks, but we also would love to see a thriving third-party ecosystem. If you are interest in creating an open-source project that builds on top of Kafka Socks, please don't hesitate to reach out, and we'd be happy to provide feedback and support.

<h2 href="#License">License</h2>

This product is licensed under the MIT License - see the LICENSE.md file for details.

This is an open source product. We are not affiliated nor endorsed by either the Apache Software Foundation or KafkaJS.

This product is accelerated by [OS Labs](https://opensourcelabs.io/).
