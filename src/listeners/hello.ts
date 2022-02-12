import { app } from '../initializers/bolt'
export default function () {
    app.message('hello', async ({ message, say }) => {
        await say(`Hey there <@${message.user}>!`);
    });
}