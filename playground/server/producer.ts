import { kafka } from './kafka' //imported from kafka.ts

const fs = require('fs');

// PRODUCER
const randomizer = (hi: number, lo: number = 0) => {
  return Math.floor(Math.random() * (hi + 1 - lo) + Math.floor(lo));
};

const producer = kafka.producer()

const produce = async () => {

    await producer.connect();
    let idx = 0;

   const interval = setInterval( async () => {
        if(idx>=100) {
            console.log('in interval inside produce')
            console.log(idx)
            clearInterval(interval);
        }
        try {
            const truck_num = randomizer(2,1)
           // console.log(truck_num)
            const responses = await producer.send({
                topic : `trucks-topic-${truck_num}`,
                messages : [
                    {
                        key: String(idx),
                        // value : String(trucks[idx].engine_temperature)
                        value: `{"truck_num":${truck_num}, "speed":${randomizer(200,100).toString()}}`
                    }
                ]
            })
        console.log("Published message");
        // console.log('Published message, engine_temperature', trucks[idx].engine_temperature )
        idx++;
        }
        catch (err) {
            console.log("Error with producing: ", err);
        }

    }, 1000)
}

export { produce }

