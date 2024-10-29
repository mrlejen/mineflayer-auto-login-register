const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
  host: 'mc.gamster.org', //server ip
  username: 'bot3test', // client name
  auth: 'offline' , // don't change it!!!
  version: "1.8.9", // server version        
})
const password = "123456789" // server pass
function login(){
    bot.chat(`/login ${password}`);
}
function register(){
    bot.chat(`/register ${password} ${password}`);
}
bot.once('spawn', async () => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    console.log('hi i spawning!');
    login();
    await sleep(1000);
    const loc1 = bot.entity.position;
    console.log(`1 loc : ${Math.floor(bot.entity.position.x)}, ${Math.floor(bot.entity.position.y)}, ${Math.floor(bot.entity.position.z)}`);
    await sleep(1000);
    bot.setControlState('forward', true);
    await sleep(2000);
    bot.setControlState('forward', false);
    console.log(`2 loc : ${Math.floor(bot.entity.position.x)}, ${Math.floor(bot.entity.position.y)}, ${Math.floor(bot.entity.position.z)}`);
    await sleep(1000);
    
    if (Math.floor(loc1.x) === Math.floor(bot.entity.position.x) &&
        Math.floor(loc1.y) === Math.floor(bot.entity.position.y) &&
        Math.floor(loc1.z) === Math.floor(bot.entity.position.z)) {
        
        register();
        console.log('login is false i try register!');
        await sleep(1000);
        const loc2 = bot.entity.position;
        console.log(`1 loc after register : ${Math.floor(bot.entity.position.x)}, ${Math.floor(bot.entity.position.y)}, ${Math.floor(bot.entity.position.z)}`);
        await sleep(1000);
        bot.setControlState('forward', true);
        await sleep(2000);
        bot.setControlState('forward', false);
        console.log(`2 loc after register: ${Math.floor(bot.entity.position.x)}, ${Math.floor(bot.entity.position.y)}, ${Math.floor(bot.entity.position.z)}`);
        
        if (Math.floor(loc2.x) === Math.floor(bot.entity.position.x) &&
            Math.floor(loc2.y) === Math.floor(bot.entity.position.y) &&
            Math.floor(loc2.z) === Math.floor(bot.entity.position.z)) {
            
            console.log('register erorrrrrrrrrr');
        } else {
            console.log('register done');
        }
    } else {
        console.log('login is true!');
    }
});
bot.on('kicked', console.log)
bot.on('error', console.log)
