import { app } from './initializers/bolt'
(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');

})();

// ----- 以下読み込み用 -----
import ping from './Commands/ping'
ping();
import hello from './listeners/hello'
hello();
import hello2 from './listeners/hello2'
hello2();