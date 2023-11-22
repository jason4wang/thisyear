// 判断是否闰年
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  // 获取今年天数
  function getDaysOfThisYear() {
    const now = new Date();
    const thisYear = new Date(now.getFullYear(), 0, 1);
    const diff = now - thisYear;
    return Math.floor(diff);
  }
  
  // 计算百分比
  function getPercentOfYearPassed() {
    const days = getDaysOfThisYear();
    const totalDays = isLeapYear(new Date().getFullYear()) ? 366 : 365;
    const percent = days / totalDays * 100;
    return percent.toFixed(8); 
  }
  
  // 调用函数并输出
  const percentPassed = getPercentOfYearPassed();
  console.log(percentPassed + '%');
