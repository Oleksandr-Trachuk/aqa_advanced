function delayedLog(text, ms) {
  setTimeout(() => console.log(text), ms);
}

delayedLog('Привіт за 500мс', 500);
delayedLog('І це через 1500мс', 1500);
