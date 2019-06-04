/*CMD
  command: divisione
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Inserisci il primo numero:
  keyboard: 
  aliases: 
CMD*/

User.setProperty("N1", data.message, "float");
Bot.runCommand ('/div2')
