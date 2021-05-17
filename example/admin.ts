import { kafka } from './kafka'

const topic = process.env.TOPIC;
const admin = kafka.admin()

const main = async () => {
  await admin.connect()
  await admin.createTopics({
    topics: [{ topic ,replicationFactor: 3}],
    waitForLeaders: true,
  })
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})