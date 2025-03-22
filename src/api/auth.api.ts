import { SignupProps } from "../page/signup"

export const signup = async(userData: SignupProps) => {
  // const response = await httpClient.post("/users/join", userData)

  return {
    email: userData.email,
    password: userData.password,
  };
}

export const restRequest = async (data: SignupProps) => {

  return {
    email: data.email,
    password: data.password,
  }
}

export const restPassword = async (data: SignupProps) => {

  return {
    email: data.email,
    password: data.password,
  }
}

// interface LoginResponse {
//   token: string;
// }

export const login = async (data: SignupProps) => {
  // const response = await httpClient.post<LoginResponse>("/users/login", userData)

  return {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  }
}
