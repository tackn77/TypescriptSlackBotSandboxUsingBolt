import { app } from '../initializers/bolt'
export default function () {
    app.message('hello2', async ({ message, say }) => {
        await say({
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `Hey there <@${message.user}>!`,
                    },
                    accessory: {
                        type: "button",
                        text: {
                            type: "plain_text",
                            text: "Chlick Me",
                        },
                        action_id: "button_click",
                    },
                },
            ],
            text: `Hey there <@${message.user}>!`,
        });
    });
    // action_idが"button_click"のアクションが実行された際に実行する処理
    app.action("button_click", async ({ body, ack, say }) => {
        // Acknowledge the action
        await ack();
        await say(`<@${body.user.id}> clicked the button`);
    });
}