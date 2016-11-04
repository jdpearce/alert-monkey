///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 
import { Config } from './config';
import { Alert } from './alert';
import { Observable } from 'rxjs';

const fs = require('fs');
const mqlight = require('mqlight');

const alerts_base = JSON.parse(fs.readFileSync('./build/alerts.json', 'utf8'));
const startUpAlert: Alert = Alert.create(alerts_base);
startUpAlert.title = "Alert-Monkey Online";

const sendClient = mqlight.createClient({ service: Config.AMQP });
sendClient.on('started', function() {
  sendClient.send(Config.TopicName, startUpAlert);
});

Observable.interval(Config.Period)
          .subscribe((x) => sendClient.send(Config.TopicName, Alert.create(alerts_base)));

