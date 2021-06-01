export declare class Confluent {
    key: string;
    secret: string;
    server: string;
    constructor(key: string, secret: string, server: string);
    create(client: string): any;
}
export default Confluent;
