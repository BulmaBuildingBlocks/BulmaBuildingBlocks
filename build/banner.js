const pack = require('../package.json');

const bannerTxt = `/*! Bulma Building Blocks v${pack.version} | MIT License | https://github.com/JosephAnson/BulmaBuildingBlocks */\n`;

process.stdout.write(bannerTxt);
process.stdin.pipe(process.stdout);
