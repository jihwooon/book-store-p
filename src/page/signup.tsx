import styled from "styled-components";
import Title from "../components/common/title";
import InputText from "../components/common/inputText";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { signup } from "../api/auth.api";
import { useNavigate } from "react-router";
import { useAlert } from "../hook/useAlert";
import Button from "../components/common/button";

export interface SignupProps {
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const { register, handleSubmit, formState: { errors } } = useForm<SignupProps>();
  const onSubmit = (data: SignupProps) => {
    signup(data).then(() => {
      showAlert('회원가입이 완료되었습니다.')
      navigate('/login');
    })
  }

  return (
    <>
      <Title size="large">회원가입</Title>
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
          <fieldset>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              {...register('password', { required: true })}
            />
            {errors.password && <p className="errot-text">패스워드를 입력합니다.</p>}
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">가입하기</Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
};

export const SignupStyle = styled.div`
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

export default Signup;
