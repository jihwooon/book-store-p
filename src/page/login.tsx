import styled from "styled-components";
import Title from "../components/common/title";
import InputText from "../components/common/inputText";
import { useForm } from "react-hook-form";
import { login } from "../api/auth.api";
import { useNavigate } from "react-router";
import { useAlert } from "../hook/useAlert";
import Button from "../components/common/button";
import { useAuthStore } from "../store/authStore";

export interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();
  const { storeLogin } = useAuthStore();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>();
  const onSubmit = (data: LoginProps) => {
    login(data).then((res) => {

      storeLogin(res.token)

      showAlert('로그인에 성공했습니다.')
      navigate('/');
    }, (error) => {
      showAlert('로그인이 실패했습니다.')
    })
  }

  return (
    <>
      <Title size="large">로그인</Title>
      <LoginStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="error-text">이메일을 입력합니다.</p>}
          </fieldset>
          <fieldset>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              {...register('password', { required: true })}
            />
            {errors.password && <p className="error-text">패스워드를 입력합니다.</p>}
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">로그인하기</Button>
          </fieldset>
        </form>
      </LoginStyle>
    </>
  );
};

export const LoginStyle = styled.div`
  max-width: ${({ theme }) => theme.layoutWidth.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`

export default Login;
