import type { Schema, Struct } from '@strapi/strapi';

export interface TextBlockTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_text_block_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface VideoBlockVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_video_block_video_blocks';
  info: {
    displayName: 'Video Block';
  };
  attributes: {
    videoUrl: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text-block.text-block': TextBlockTextBlock;
      'video-block.video-block': VideoBlockVideoBlock;
    }
  }
}
