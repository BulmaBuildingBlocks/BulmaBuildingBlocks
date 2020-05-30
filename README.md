<p align="center">
  <a href="https://www.bulmabuildingblocks.com/">
    <img src="https://raw.githubusercontent.com/BulmaBuildingBlocks/BulmaBuildingBlocks/master/icon-black.png" />
  </a>
</p>
<p>
  <a href="https://github.com/BulmaBuildingBlocks/BulmaBuildingBlocks/blob/master/CHANGELOG.md">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/BulmaBuildingBlocks/bulmabuildingblocks">
  </a>
  <a href="https://www.npmjs.com/package/bulmabuildingblocks">
    <img src="https://img.shields.io/npm/dt/bulmabuildingblocks.svg" />
  </a>

  <a href="https://github.com/BulmaBuildingBlocks/BulmaBuildingBlocks#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/BulmaBuildingBlocks/BulmaBuildingBlocks/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/BulmaBuildingBlocks/BulmaBuildingBlocks/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/bulmabuildingblocks.svg" />
  </a>
</p>

> Bulma Building Blocks is a lightweight library of responsive HTML snippets based on [Bulma](http://bulma.io/) framework and design.

## Features

* Keep your current Bulma theme / variables easily
* Very lightweight with none internal dependencies aside from Bulma

## Documentation

The documentation is in the docs directory, it serves as the demo as well.

Browse [online documentation here](https://www.bulmabuildingblocks.com/).

## Getting Started

### Use the Builder
https://www.bulmabuildingblocks.com/page-builder

### Standalone
Using CDN or downloading files to serve local

* The css file comes with Bulma and Bulma Building Blocks.

**Installation**

Just download or use the CDN:

https://unpkg.com/bulmabuildingblocks/dist/bulmabuildingblocks.min.css

### Using npm
Install the npm package

    npm install bulmabuildingblocks

Look at the below example of how to import using npm

    // Bulma Building Block
    @import 'bulmabuildingblocks';

Look at the below example of how to import into an existing Bulma project using npm, you can leave out the variable file if you don't want the same configuration as Bulma Building Blocks

    // Bulma Building Block variables
    @import 'bulmabuildingblocks/src/initial-variables';

    // Bulma
    @import 'bulma/bulma';
    
    // Bulma Building Block
    @import 'bulmabuildingblocks/src/main';
    
### Use the skeleton
Use the template below as a starting point, copy the html snippets into the recommended area.

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bulma Building Block</title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/bulmabuildingblocks@0.5.6/dist/bulmabuildingblocks.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
      </head>
      <body>
         <!-- Insert the html blocks here. -->
      </body>
    </html>

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/BulmaBuildingBlocks/BulmaBuildingBlocks/issues).

## Core Team

<table>
  <tr>
    <td align="center"><a href="https://twitter.com/josephleeanson"><img src="https://avatars2.githubusercontent.com/u/8811755?v=4" width="80px;" alt=""/><br /><sub><b>Joseph Anson</b></sub></a><br /></td>
  </tr>
</table>

## Copyright and license
Code Copyright 2020 Joseph Anson. Code released under the MIT license.
