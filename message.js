"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTestMessage = void 0;
const sendTestMessage = (testSenderNum, client, message, number) => {
    if (testSenderNum) {
        client.messages
            .create({
            body: message,
            from: `+${testSenderNum}`,
            to: `+1${number}`,
        })
            .then((message) => console.log(`Message #: ${message.sid} was sent to ${number}`));
    }
};
exports.sendTestMessage = sendTestMessage;
