const bcrypt = require('bcryptjs');

bcrypt.hash('Gomathi_hod_cse', 10).then((hash) => {
  console.log("Hashed Password:", hash);
});
