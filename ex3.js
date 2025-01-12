function wordCount(text) {
    return 0
  }
  
  function test(text, answer) {
    let result = wordCount(text)
    if (result == answer) {
      console.log('pass:', { text, answer })
    } else {
      console.log('fail:', { text, answer })
    }
  }
  
  test('apple', 1)
  test('apple juice', 2)
  test('ice cream', 2)
  test('Today is Sunday.', 3)
  test('Mr. Wong', 2)
  test("Peter's dog", 2)
  test('製作簡單的密碼強度檢查器', 12)
  