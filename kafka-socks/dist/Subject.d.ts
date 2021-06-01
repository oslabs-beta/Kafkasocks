export declare class Subject {
    io: any;
    namespace: any;
    consumerArr: any[];
    constructor(io: any, namespace: string, consumerArr?: any[]);
    add(consumer: any): void;
    pause(): void;
    resume(): void;
    connect(): void;
}
export default Subject;
