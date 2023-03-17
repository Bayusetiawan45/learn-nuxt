export interface MediaFilesType {
  id: string;
  url: string;
}
export interface AuthorType {
  id: string;
  handle: string;
  name: string;
  profileImage: string;
}
export interface ReplyToType {
  id: string;
  author: AuthorType
}
export interface TweetType {
  id: string;
  text: string;
  mediaFiles: MediaFilesType[];
  author: AuthorType;
  replyTo: ReplyToType;
  postedAtHuman: string;
}