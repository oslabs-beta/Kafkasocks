declare type ConsumerInterface = {
    connect: Function;
    subscribe: Function;
    run: Function;
    pause: Function;
    resume: Function;
    isConsuming: Boolean;
};
export declare class Consumer {
    consumer: ConsumerInterface;
    topic: string;
    event: string;
    pause: boolean;
    resume: boolean;
    isConsuming: boolean;
    constructor(consumer: ConsumerInterface, topic: string, event: string, pause?: boolean, resume?: boolean, isConsuming?: boolean);
    pauser(): void;
    resumer(namespace: any): void;
    runAfterResume(namespace: any): Promise<void>;
    run(namespace: any): Promise<void>;
}
export default Consumer;
