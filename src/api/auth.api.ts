import { SignupProps } from "../page/signup"

export const signup = async(userData: SignupProps) => {
  // const response = await httpClient.post("/users/join", userData)

  return {
    email: userData.email,
    password: userData.password
  };
}
