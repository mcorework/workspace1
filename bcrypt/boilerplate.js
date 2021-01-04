const fs = require('fs');

fs.mkdir('project1', { recursive: true }, (err) => {
    console.log('WITH STATEMENT 1......')
    if (err) throw err;
});
console.log('WITH STATEMENT 2......')
