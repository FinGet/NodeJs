const fs = require('fs');

fs.stat('./03_stat.js', (err, stats) => {
    if (err) throw err;
    console.log(stats);
})
/*
Stats {
  dev: 3061041383,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 10133099161774496,
  size: 124,
  blocks: undefined,
  atimeMs: 1509591541926.4944,
  mtimeMs: 1509591594939.6978,
  ctimeMs: 1509591594939.6978,
  birthtimeMs: 1509591541926.4944,
  atime: 2017-11-02T02:59:01.926Z,
  mtime: 2017-11-02T02:59:54.940Z,
  ctime: 2017-11-02T02:59:54.940Z,
  birthtime: 2017-11-02T02:59:01.926Z }

*/