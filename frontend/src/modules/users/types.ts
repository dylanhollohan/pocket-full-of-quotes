export type User = {
  username: String;
  email: String;
  id: String;
}

export type SignupRequestPayload = LoginRequestPayload & {
  username: String;
  email: String;
  password: String;
}

export type LoginRequestPayload = {
  email: String;
  password: String;
}

export type SignupSuccessPayload = {
  userId: String
}

export type LoginSuccessPayload = SignupSuccessPayload;

export type SignupError = {
  message: String;
}

export type LoginError = SignupError;