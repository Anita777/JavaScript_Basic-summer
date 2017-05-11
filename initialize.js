const fs = require('fs');
const path = require('path');

const lessons = Array.from({ length: 25 }, (_, k) => `Lesson ${k + 1}`);
const createFolder = (context = __dirname, folderName) => {
  fs.mkdir(path.resolve(context, folderName), err => {
    if (err) console.log(err);
  });
};
if (!fs.existsSync('classworks')) {
  fs.mkdirSync(path.resolve(__dirname, 'classworks'));
}

if (!fs.existsSync('homeworks')) {
  fs.mkdirSync(path.resolve(__dirname, 'homeworks'));
}

lessons.forEach(lesson => {
  createFolder('classworks', lesson);
});
