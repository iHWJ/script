const url = "https://api.exchangerate-api.com/v4/latest/CNY";

$httpClient.get(url, function(error, response, data) {
  if (error) {
    $done();
    return;
  }

  const rates = JSON.parse(data).rates;
  const usdToCNY = (1 / rates.USD).toFixed(2);
  const cnyToHKD = rates.HKD.toFixed(2);
  const cnyToJPY = rates.JPY.toFixed(2);
  const cnyToKRW = rates.KRW.toFixed(2);
  const eurToCNY = (1 / rates.EUR).toFixed(2);
  const gbpToCNY = (1 / rates.GBP).toFixed(2);
  const tryToCNY = rates.TRY.toFixed(2);
  const timestamp = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  const content = `>
🇺🇸1美元兑 ${usdToCNY}🇨🇳人民币
🇨🇳1人民币兑 ${cnyToHKD}🇭🇰港币
🇨🇳1人民币兑 ${cnyToJPY}🇯🇵日元
🇨🇳1人民币兑 ${cnyToKRW}🇰🇷韩元
🇨🇳1人民币兑 ${tryToCNY}🇹🇷里拉
🇪🇺1欧元兑 ${eurToCNY}🇨🇳人民币
🇬🇧1英镑兑 ${gbpToCNY}🇨🇳人民币
`;

  const panel = {
    title: `实时汇率 ${timestamp}`,
    content: content,
    icon: "bitcoinsign.circle",
    "icon-color": "#EF8F1C"
  };

  $done(panel);
});
