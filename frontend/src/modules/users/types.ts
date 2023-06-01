export type User = {
  username: String;
  email: String;
  id: String;
}

export type SignupRequestPayload = {
  username: String;
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