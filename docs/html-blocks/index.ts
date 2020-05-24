import headerBlocks from '~/html-blocks/headers';
import featureBlocks from '~/html-blocks/features';
import calltoactionBlocks from '~/html-blocks/calltoaction';
import contentBlocks from '~/html-blocks/content';
import footerBlocks from '~/html-blocks/footers';
import { Block, BlockListObject, ContentTypes } from '~/html-blocks/types';

// Manifest all blocks into one array
const allHtmlBlocks: { [x: string]: Block[] } = {
  [ContentTypes.Headers]: headerBlocks,
  [ContentTypes.Features]: featureBlocks,
  [ContentTypes.CallToActions]: calltoactionBlocks,
  [ContentTypes.Contents]: contentBlocks,
  [ContentTypes.Footers]: footerBlocks
};

function AllHtmlBlocksSetup() {
  for (const type in allHtmlBlocks) {
    for (const item of allHtmlBlocks[type]) {
      item.componentName = item.component.name;
      item.type = type as ContentTypes;
    }
  }
}

AllHtmlBlocksSetup();

// Creates Object of Blocks used for importing directly as blocks in vue templates
function blocksExtract(): BlockListObject {
  const blocks: BlockListObject = {};

  for (const index in allHtmlBlocks) {
    const allBlocksArray = allHtmlBlocks[index].map((x) => x.component);

    for (const block of allBlocksArray) {
      blocks[block.name] = block;
    }
  }

  return blocks;
}

export const blocks = blocksExtract();

export default allHtmlBlocks;
