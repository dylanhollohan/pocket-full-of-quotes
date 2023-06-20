export type User = {
  username: string;
  email: string;
  id: string;
}

export type SignupRequestPayload = LoginRequestPayload & {
  username: string;
  email: string;
  password: string;
}

export type LoginRequestPayload = {
  email: string;
  password: string;
}

export type SignupSuccessPayload = {
  userId: string
}

export type LoginSuccessPayload = SignupSuccessPayload;

export type SignupError = {
  message: string;
}

export type LoginError = SignupError;