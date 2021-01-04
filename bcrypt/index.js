const bcrypt = require('bcrypt');
const hashpassword = async () => {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
}
hashpassword();