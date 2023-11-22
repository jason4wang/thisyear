// 判断闰年
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// 获取今年总天数
function getTotalDaysOfYear(year) {
  return isLeapYear(year) ? 366 : 365; 
}

// 获取今年已过天数
function getSecondsPassedOfYear() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  return Math.floor((now - startOfYear) / 1000); 
}

// 计算今年过去的百分比
function getPercentOfYearPassed() {
  
  const totalSeconds = getTotalDaysOfYear(new Date().getFullYear()) * (24*3600);  
  const secondsPassed = getSecondsPassedOfYear();
  
  const decimalDigits = 8;
  const percent = (secondsPassed / totalSeconds * 100).toFixed(decimalDigits);

  return percent + "%";
}

// 每秒调用一次更新
setInterval(() => {
  
  const percentPassed = getPercentOfYearPassed();

  document.getElementById('percent').innerText = percentPassed;

}, 1000);
