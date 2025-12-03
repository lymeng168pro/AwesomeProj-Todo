export interface IStory {
  key: number;
  created_by: {
    key: string;
    name: string;
    photoURL: any;
  };
  storyURL: string;
  created_at?: any;
  expired_at?: any;
  total_view?: number;
}
