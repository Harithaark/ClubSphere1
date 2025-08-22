const bcrypt = require('bcryptjs');

const inputPassword = 'Gomathi_hod_cse';
const storedHash = '$2b$10$mygx9YKybNsQYGN.rz8uMecxVa/Xru.l4m/LCTM2L6n2wo0Xa.ypG'; // use the one in DB

bcrypt.compare(inputPassword, storedHash).then(result => {
  console.log('Password Match:', result); // should be true
});
