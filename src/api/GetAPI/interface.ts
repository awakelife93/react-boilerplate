export interface ContentIE {
  imageLink: string;
  title: string;
  subTitle: string;
  description: string;
}

export interface TempIE {
  data: ContentIE[];
  status: number;
  message: string;
}
