<h1 align ="center">Kafka Socks</h1>
<h3>Table of Contents</h3>

* [About](https://github.com/oslabs-beta/Kafkasocks/#About)
* [Getting Started](https://github.com/oslabs-beta/Kafkasocks/#Getting-Started])
* [Example](https://github.com/oslabs-beta/Kafkasocks/#Example)
* [Strategies](https://github.com/oslabs-beta/Kafkasocks/#Strategies)
* [Contributors](https://github.com/oslabs-beta/Kafkasocks/#Contributors)
* [License](https://github.com/oslabs-beta/Kafkasocks/#License)

<h3 href="#About">About</h3>

Kafka Socks is an easy-to-use and lightweight framework that combines Kafka consumer functionality with websocket to pipe the Kafka messages directly to the frontend client, in realtime.  Kafka Socks abstracts away much of the boilerplate and setup of this oft-used Kafka-Websocket architecture, providing developers with a simple and intuitive interface to achieve a powerful result on the client-side.

The typical use case for the Kafka Socks library is rendering realtime data on a frontend client, but Kafka Socks framework is unopinionated and flexible enough to process realtime data in whatever way the developer may see fit.

Without a websocket, the only way a web client could access data consumed by the Kafka consumer on the server side would be fetch requests.  Not only are fetch requests notoriously slow, browsers also limit the number of responded fetch requests a client may have at any given time (most browers set this limit below 10).  In short, fetch requests could get the data to the frontend, but doing so would mean that the frontend has lost any ability to access this data in realtime; in applications where frontend rendering in real time is necessary, fetch requests simply won't work.

Using the observer design pattern, websockets permit the server to pipe data in time because there is always an established and open link between the server and client.  Kafka Socks did not invent this system design.  In fact, it is a relatively common pattern to achieve realtime data processing on the frontend.  Instead, Kafka Socks abstracts away the details of implementing this kafka-websocket design pattern, providing developers with an easy way to implement this pattern in a few lines of code.

<h3>Getting Started</h3>

Install Kafka Socks as an npm module and save it to your package.json as a dependency.  

` npm install kafka-socks `

Once installed, you can now require on your server the modules necessary to implement Kafka Socks:

` import { Consumer, Subject } from 'kafka-socks'; `

The Consumer class is a wrapper around a KafkaJS Consumer object and works much the same way.  The Subject is the heart of the Kafka Socks library and will be explained in the [Strategies](https://github.com/oslabs-beta/Kafkasocks/#Strategies) section.

<h3 href="#Example">Example</h3>
``` 


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
