const fs = require('fs');
const path = require('path');

const testCase = "testSuite.json"
const testFile = 'index.html';
const data = JSON.parse(fs.readFileSync(testCase));
const nginxServer = process.env.WEB_NGINX_URL;
const mypath = nginxServer + '/' + path.basename(path.resolve('../../')) + '/src/web/html/' + testFile;

console.log(mypath);
for(i = 0; i < Object.keys(data.suites[0].cases).length; i ++) {
  data.suites[0].cases[i].records[0].target.options[0].value = mypath;
}
fs.writeFileSync(testCase, JSON.stringify(data, null, 4));

const seleniumServer = process.env.WEB_SELENIUM_URL;
const settings = "settings.json"
const settingsData = JSON.parse(fs.readFileSync(settings));
settingsData.webdriver.configs[0].serverUrl = seleniumServer;

fs.writeFileSync(settings, JSON.stringify(settingsData, null, 4));