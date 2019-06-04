/*CMD
  command: /div2
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Inserisci il secondo numero
  keyboard: 
  aliases: 
CMD*/

let n2 = data.message;
n2 = parseFloat(n2);
let n1 = User.getProperty("N1");
n1 = parseFloat(n1);

let RIS = n1 / n2;
Bot.sendMessage(RIS);
Bot.sendMessage("__creato da:__ @creatoredigruppi")
