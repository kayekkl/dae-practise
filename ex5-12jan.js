// 建立商品描述，包含：
// - 商品名稱: xxx
// - 原價: xxx
// - 折扣價: xxx
// - 折扣百分比: xxx
let productName = "機械鍵盤";
let originalPrice = 2999;
let discount = 0.8;

// 計算折扣價
let discountPrice = originalPrice * discount;

// 建立完整商品描述
let description = `
商品名稱: ${productName}
原價:$${originalPrice} 元
折扣價:$${discountPrice.toFixed(2)} 元
折扣百分比: ${discount * 100}%
`;

console.log(description);