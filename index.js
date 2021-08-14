fs = require('fs');

const dirs = fs.readdirSync(`${__dirname}`, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

dirs.forEach((dir) => {

    const files = fs.readdirSync(`${__dirname}\\${dir}`, { withFileTypes: true })
        .map(dirent => dirent.name);

    if (files.length === 0) {
        fs.rmdir(`${__dirname}\\${dir}`, (err) => {
            if (err)
                console.log(err);
        });
    }

    files.forEach((file) => {

        let oldPath = `${__dirname}\\${dir}\\${file}`;
        let newPath = `${__dirname}\\${file}`;

        fs.rename(oldPath, newPath, (err) => {
            if (err)
                console.log(err);
        });

    });

});