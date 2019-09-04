export function fen2yuan (money = 0, decimal = 2) {
  if (!isNaN(money)) {
    let result = (money / 100).toFixed(decimal) * 1
    // 大于1000的，每隔三位整数用逗号分隔
    // 注意bug=>ie10下：parseInt(0,10).toLocaleString('en-US')=".00"，所以下面对小于1000的不作加逗号的处理
    result = parseInt(result, 10) > 1000 ? result.toLocaleString('en-US').toString() : result.toString()
    // 若小数位全为0，则移除小数位
    return result.includes('.'.padEnd(decimal + 1, '0')) ? result.replace('.'.padEnd(decimal + 1, '0'), '') : result
  }
  return money
}
