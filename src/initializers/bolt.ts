import { App } from '@slack/bolt';
import * as dotenv from "dotenv"
dotenv.config();

export const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});

