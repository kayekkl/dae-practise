// 實作發票對獎程式
// 特別獎號碼：12345678
// 使用者發票號碼：後三碼為 678
// 對中後三碼可得 200 元

let specialNumber = 12345678;
let userNumber = 87654678;

// 使用 % 運算子取得後三碼
let lastThreeDigitsSpecial = specialNumber % 1000;
let lastThreeDigitsUser = userNumber % 1000;

// 判斷是否對中後三碼
let isWinner = lastThreeDigitsUser === lastThreeDigitsSpecial;

// 顯示結果
if (isWinner) {
  console.log("恭喜！你對中了後三碼，可得 200 元！"); // 如果對中，顯示獎金資訊
} else {
  console.log("很遺憾，您未對中後三碼。"); // 如果未對中，顯示未對中的訊息
}