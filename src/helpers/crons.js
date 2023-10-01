const CronJob = require("cron").CronJob;
const { send_mail } = require("../services/email.service");

/** It's running on every 3 seconds. */
new CronJob(
  "*/3 * * * * *",
  function () {
    console.log("It's running on every 3 seconds.");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** Send mail using cronjob */
new CronJob(
  "35 2 * * *",
  function () {
    send_mail("m18799990@gmail.com","mail from manali"," This is mail ☺️ ");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** It's running on when clock time is 8:37 of 24 hours */
new CronJob(
  "37 8 * * *",
  function () {
    console.log("It's running on when clock time is 8:37");
  },
  null,
  false,
  //   "America/Sao_Paulo"
  "Asia/Kolkata"
).start();