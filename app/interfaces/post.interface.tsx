export interface IPost {
  key: number;
  created_by: {
    key: string;
    name: string;
    photoURL: any;
  };
  content: any;
  postImage: string;
  createdAt: any,
}
