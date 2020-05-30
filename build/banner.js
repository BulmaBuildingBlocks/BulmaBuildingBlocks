const pack = require('client/package.json');

const bannerTxt = `/*! Bulma Building Blocks v${pack.version} | MIT License | https://github.com/BulmaBuildingBlocks/BulmaBuildingBlocks */\n`;

process.stdout.write(bannerTxt);
process.stdin.pipe(process.stdout);
