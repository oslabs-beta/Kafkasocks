// console.log('hello world');
// const Kafka = require...

export class Confluent {
  key: string;
  secret: string;
  server: string;

  constructor(key: string, secret: string, server: string) {
    this.key = key;
    this.secret = secret;
    this.server = server;
  }

  // TODO:  look into more specific object typing
  //        i.e., in this case we may want to be specific
  //        that the object we are expecting is
  //        an instance of the Confluent Kafka client
  create(client: object) {
  //   const sasl =
  //     this.key && this.secret
  //       ? { username: this.key, password: this.secret, mechanism: "plain" }
  //       : null;
  //   const ssl = !!sasl;
  //   return new Kafka({
  //     clientId: client,
  //     brokers: [this.server],
  //     ssl,
  //     sasl,
  //   });
  // }
  }

}
