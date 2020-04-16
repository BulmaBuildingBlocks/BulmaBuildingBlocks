import headerBlocks from '~/html-blocks/headers';
import featureBlocks from '~/html-blocks/features';
import contentBlocks from '~/html-blocks/content';
import footerBlocks from '~/html-blocks/footers';
import { Block, BlockListObject } from '~/types/Block';

// Manifest all blocks into one array
const allHtmlBlocks: { [x: string]: Block[] } = {
  headers: headerBlocks,
  features: featureBlocks,
  contents: contentBlocks,
  footers: footerBlocks
};

// Creates Object of Blocks used for importing directly as blocks in vue templates
const blocksExtract = (): BlockListObject => {
  const blocks: BlockListObject = {};

  for (const index in allHtmlBlocks) {
    const allBlocksArray = allHtmlBlocks[index].map((x) => x.component);

    for (const block of allBlocksArray) {
      blocks[block.name] = block;
    }
  }

  return blocks;
};

export const blocks = blocksExtract();

export default allHtmlBlocks;
