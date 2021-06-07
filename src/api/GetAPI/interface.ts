export interface ContentsIE {
  imageLink: string;
  title: string;
  subTitle: string;
  description: string;
}

export interface TempIE {
  data: ContentsIE[];
  status: number;
  message: string;
}
