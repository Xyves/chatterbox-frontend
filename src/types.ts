export interface User {}

export interface UserData {
  nickname: string;
  email?: string;
  bio?: string;
  avatar_url?: string;
  id: string;
}
export interface MessageInterface {
  chat_id: string;
  id: string;
  content: string;
  is_read?: boolean;
  sender_id: string;
  time: number;
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
  messages: Message[];
  error: string | null;
  success: boolean;
  status: string;
}
export interface Message {
  id: string;
  sender_id: string;
  isRead: boolean;
  content: string;
  time: string;
  chat_id: string;
}
