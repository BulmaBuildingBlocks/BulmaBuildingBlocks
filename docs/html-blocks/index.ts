import headerBlocks from '~/html-blocks/headers';
import featureBlocks from '~/html-blocks/features';
import contentBlocks from '~/html-blocks/content';
import { Block, BlockListObject } from '~/types/Block';

// Manifest all blocks into one array
const allHtmlBlocks: { [x: string]: Block[] } = {
  Headers: headerBlocks,
  Features: featureBlocks,
  Content: contentBlocks
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
