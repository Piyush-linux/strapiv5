import type { Attribute, Schema } from '@strapi/strapi';

export interface TextBlockTextBlock extends Schema.Component {
  collectionName: 'components_text_block_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    body: Attribute.Blocks;
    heading: Attribute.String;
  };
}

export interface VideoBlockVideoBlock extends Schema.Component {
  collectionName: 'components_video_block_video_blocks';
  info: {
    displayName: 'Video Block';
  };
  attributes: {
    videoUrl: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text-block.text-block': TextBlockTextBlock;
      'video-block.video-block': VideoBlockVideoBlock;
    }
  }
}
