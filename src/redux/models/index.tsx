export interface PostsModel {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

export const PostState: PostsModel = {
  userId: null,
  id: null,
  title: '',
  body: '',
};

export interface LoginUserModel {
  username: string;
  password: string;
}
export const LoginUserState: LoginUserModel = {
  username: '',
  password: '',
};
