const calculateTotalBalance(users) => {
  users.reduce((sum, user) => {
  return sum + user.balance;
}, 0);
};



console.log(calculateTotalBalance)