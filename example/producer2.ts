import { produce } from './producer'

produce().catch((error: any) => {
    console.log(error);
    process.exit(1);
  })