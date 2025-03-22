import { SignupStyle } from "./signup";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { restPassword, restRequest } from "../api/auth.api";
import Button from "../components/common/button";
import InputText from "../components/common/inputText";
import Title from "../components/common/title";
import { useAlert } from "../hook/useAlert";

export interface SignupProps {
  email: string;
  password: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();
  const [resetRequest, setResetPassword] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<SignupProps>();
  const onSubmit = (data: SignupProps) => {
    if (resetRequest) {
      restPassword(data).then(() => {
        showAlert("비밀번호가 최기화되었습니다.")
        navigate("/login")
      })
    } else {
      restRequest(data).then(() => {
        setResetPassword(true)
      })
    }
  }

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="errot-text">이메일을 입력합니다.</p>}
          </fieldset>
          {resetRequest && (
            <fieldset>
              <InputText
                placeholder="비밀번호"
                inputType="password"
                {...register('password', { required: true })}
              />
              {errors.password && <p className="errot-text">패스워드를 입력합니다.</p>}
            </fieldset>
          )}
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              {resetRequest ? "비밀번호 초기화" : "초기화 요청"}
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
};

export default ResetPassword;
