export interface UserData {
  nickname: string;
  email?: string;
  bio?: string;
  avatar_url?: string;
  id: string;
  chat_id?: string;
}
export interface MessageInterface {
  id: string;
  sender_id: string;
  isRead: boolean;
  content: string;
  time: string;
  chat_id: string;
}
export interface AuthState {
  loading: boolean;
  user: UserData | null;
  userToken: string | null;
  error: string | null;
  userInfo: object | null;
  success: boolean;
}
export interface ChatState {
  messages: MessageInterface[];
  error: string | null;
  success: boolean;
  status: string;
}

export interface submitMessageData {
  chat_id: string;
  id: string;
  content: string;
}
export interface loginData {
  nickname: string;
  password: string;
}
export interface registerData {
  nickname: string;
  password: string;
  email: string;
}
