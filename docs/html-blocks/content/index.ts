import ContentTitleWithContent from './content-simple-title-with-content';
import ContentTitle from './content-simple-title';
import ContentSubtitle from './content-simple-subtitle';
import ContentTitleSubtitle from './content-simple-title-subtitle';
import ContentSubtitleLeft from './content-simple-subtitle-left';
import ContentSubtitleRight from './content-simple-subtitle-right';
import ContentTitleTwoColumn from './content-simple-title-two-column';
import ContentSingleImage from './content-simple-single-image';
import { Block } from '~/types/Block';

const blocks: Block[] = [
  ContentTitleWithContent,
  ContentTitle,
  ContentSubtitle,
  ContentTitleSubtitle,
  ContentSubtitleLeft,
  ContentSubtitleRight,
  ContentTitleTwoColumn,
  ContentSingleImage
];

export default blocks;
