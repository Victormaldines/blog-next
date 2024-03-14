export type PostID = number;

export type PostAuthorFormat = {
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostAuthorData = {
  id: number;
  attributes: PostAuthorFormat;
};

export type PostAuthor = {
  data: PostAuthorData;
};

export type PostCategoryFormat = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCategoryData = {
  id: number;
  attributes: PostCategoryFormat;
};

export type PostCategory = {
  data: PostCategoryData;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormatsDataThumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
};

export type PostCoverFormatsData = {
  thumbnail: PostCoverFormatsDataThumbnail;
  small: PostCoverFormatsDataThumbnail;
  medium: PostCoverFormatsDataThumbnail;
  large: PostCoverFormatsDataThumbnail;
};

export type PostCoverFormat = {
  name: string;
  width: number;
  height: number;
  ext: string;
  url: string;
  hash: string;
  mime: string;
  path: null;
  size: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  formats: PostCoverFormatsData;
};

export type PostCoverData = {
  id: number;
  attributes: PostCoverFormat;
};

export type PostCover = PostCoverFormat & {
  data: PostCoverData;
  id: PostID;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostContentFormatChildren = {
  text: string;
};

export type PostDataContent = {
  type: string;
  children: PostContentFormatChildren[];
};

export type PostDataFormat = {
  title: string;
  content: PostDataContent[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: PostCover;
  author: PostAuthor;
  category: PostCategory;
};

export type PostData = {
  id: PostID;
  attributes: PostDataFormat;
  content: string;
};
