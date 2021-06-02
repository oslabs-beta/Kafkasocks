const { Kafka } = require("kafkajs");

// Confluent class instantiates the connection Confluent Kafka cluster
export class Confluent {
  key: string;
  secret: string;
  server: string;

  /**
   * Constructs a wrapper around a Confluent Kafka cluster
   * @param key the key or username for the Confluent Kafka cluster
   * @param secret the secret / password for the Confluent Kafka cluster
   * @param server the server URL for the Confluent Kafka cluster
   */
  constructor(key: string, secret: string, server: string) {
    this.key = key;
    this.secret = secret;
    this.server = server;
  }

  /**
   * Instantiates a kafkaJS object from the Confluent Kafka cluster
   * @param client identifies the client ID for the Confluent cluster
   * @returns a KafkaJS Object
   */
  create(client: string) {
    const sasl =
      this.key && this.secret
        ? { username: this.key, password: this.secret, mechanism: "plain" }
        : null;
    const ssl = !!sasl;

    return new Kafka({
      clientId: client,
      brokers: [this.server],
      ssl,
      sasl,
    });
  }
}

export default Confluent;
