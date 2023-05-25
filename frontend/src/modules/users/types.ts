export type User = {
  username: String;
  email: String;
  id: String;
}

export type SignupPayload = {
  username: String;
  email: String;
  password: String;
}

export type SignupError = {
  message: String;
}