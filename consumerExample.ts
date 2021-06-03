import exampleKafka from './confluentClassExample';
//import Kafka Socks as needed
import { Consumer, Subject } from 'kafka-socks';

//Create a new Consumer, passing in a KafkaJS consumer, a topic, and the name of your Websocket event
const kafkaSocksConsumer = new Consumer(kafkaConsumer, 'kafka-topic', 'websocket-event-ID');

//Create a new Subject, passing in the Socket.io instance and the name of your subject
const kafkaSocksSubject = new Subject(io, 'subject-name');
