import { SignupProps } from "../page/signup"

export const signup = async(userData: SignupProps) => {
  // const response = await httpClient.post("/users/join", userData)

  return {
    email: userData.email,
    password: userData.password
  };
}

export const restRequest = async (data: SignupProps) => {

 return {
   email: data.email,
   password: data.password
 }
}

export const restPassword = async (data: SignupProps) => {

 return {
   email: data.email,
   password: data.password
 }
}
