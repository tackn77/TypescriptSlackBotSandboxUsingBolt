import { app } from '../initializers/bolt'
export default function () {
    app.command('/ping', async ({ command, ack, say, respond }) => {

        console.log(command);

        await ack();
        await say(`pong`);
    });
}