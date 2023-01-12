export const sendTestMessage = (
  testSenderNum: string | undefined,
  client: any,
  message: any,
  number: string
) => {
  if (testSenderNum) {
    client.messages
      .create({
        body: message,
        from: `+${testSenderNum}`,
        to: `+1${number}`,
      })
      .then((message: any) =>
        console.log(`Message #: ${message.sid} was sent to ${number}`)
      );
  }
};
