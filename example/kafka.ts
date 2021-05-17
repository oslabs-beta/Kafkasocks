import Confluent from '../kafka-socks/Confluent';
require('dotenv').config();

const { API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER } = process.env;
const broker = new Confluent(API_KEY!, API_SECRET!, KAFKA_BOOTSTRAP_SERVER!);
const kafka = broker.create('new-client');


export { kafka };