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

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
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
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostData = {
  id: PostID;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  // created_by: PostCreatedBy;
  // updated_by: PostCreatedBy;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  cover: PostCover;
};
