// import { Confluent } from 'kafka-socks';
import Confluent from "./../../kafka-socks/Confluent";

require('dotenv').config();

const API_KEY = "YA46J4FQIQRYNZY3";
const API_SECRET = `sbzVVNfzXWR5o296sd9MlNvoZoYFGIBa4dJMj/RJiRa7awkH2lD9IluziRdjQR8S`;
const KAFKA_BOOTSTRAP_SERVER = `pkc-lzvrd.us-west4.gcp.confluent.cloud:9092`;


const kafka: { producer: Function; consumer: Function } = new Confluent(
    API_KEY,
    API_SECRET,
    KAFKA_BOOTSTRAP_SERVER
  ).create("client-id");

export { kafka };