function checkEmailFormat(email) {
    // return 'correct'
    return 'missing username'
  }
  
  function test(email, answer) {
    let result = checkEmailFormat(email)
    if (answer == result) {
      console.log('pass:', { email, answer })
    } else {
      console.log('fail:', { email, answer, result })
    }
  }
  
  test('username@domain.com', 'correct')
  
  test('user name@domain.com', 'having space in username')
  
  test('username', 'missing domain name')
  
  test('@facebook.com', 'missing username')
  