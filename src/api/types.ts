export type SearchCategories = 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';

export type SortBy = 'relevance' | 'newest';

export interface BookInfo {
  title?: string;
  description?: string;
  authors?: string[];
  categories?: string[];
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
    extraLarge?: string;
  };
}

/// Request
export interface QueryRequestBooks {
  searchValue: string;
  searchCategories: SearchCategories;
  countBooksOnPage: number;
  sortBy: SortBy;
}
export interface QueryRequestBook {
  id: string;
}

/// Response
export interface QueryResponseBook {
  id: string;
  volumeInfo: BookInfo;
}

export interface QueryResponseBooks {
  totalItems: number;
  items: {
    id: string;
    volumeInfo: BookInfo;
  }[];
}
