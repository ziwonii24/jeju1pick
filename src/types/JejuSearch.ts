interface CdType {
  value: string;
  label: string;
  refid: string;
}

interface PhotoType {
  descseo: string;
  photoid: {
    photoid: number;
    imgpath: string;
    thumbnailpath: string;
  };
}

interface ItemType {
  alltag: string;
  cententsid: string;
  contentscd: CdType;
  title: string;
  region1cd: CdType;
  region2cd: CdType;
  address: string;
  roadaddress: string;
  tag: string;
  introduction: string;
  latitude: number;
  longitude: number;
  postcode: string;
  phoneno: string | null;
  repPhoto: PhotoType;
}

interface ResType {
  totalCount: number;
  resultCount: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  items: ItemType[];
}

interface ParamType {
  page: number;
  cid?: string;
}

export { ParamType, ResType, ItemType };
