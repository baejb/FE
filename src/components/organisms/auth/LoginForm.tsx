import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AuthPostButton, AuthInput, AuthValidMessage } from "../../atoms";
import { TitleLink } from "../../molecules";
import { validationRules } from "../../../utils/auth/validationRules";

import useLogin from "../../../hooks/useLogin";

import { LoginType } from "../../../types/authTypes";
import { pathName } from "../../../App";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginType>({ mode: "onBlur" });

  const { login, isLoading, error } = useLogin();
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const navigate = useNavigate();

  const handleValid = async () => {
    const email = watch("email");
    const password = watch("password");
    const data: LoginType = { email, password };
    try {
      const response = await login("/api/auth/login", data);
      console.log(response);

      if (response.status === 200) {
        setErrorMessage("");
        alert("로그인에 성공했습니다.");
        navigate(`${pathName.home}`); // 로그인 성공 시 대시보드로 이동
      } else {
        setErrorMessage(response.message || "로그인에 실패했습니다.");
      }
    } catch (err) {
      console.error("로그인 요청 중 오류가 발생했습니다.", err);
      setErrorMessage("로그인 요청 중 오류가 발생했습니다.");
    }
  };
  useEffect(() => {
    const subscription = watch(() => {
      setErrorMessage(null);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  useEffect(() => {
    setErrorMessage(error);
  }, [error]);
  const handleError = (errors: any) => console.error(errors);
  return (
    <Container>
      <form method="post" onSubmit={handleSubmit(handleValid, handleError)}>
        <TitleLink
          title="로그인"
          text="아직 SingK 계정이 없으신가요?"
          linkTitle="회원가입"
          link={`${pathName.signUp}`}
        />
        <AuthInput
          name="email"
          register={register("email", validationRules.email)}
          placeholder="이메일 입력"
        />
        <AuthInput
          name="password"
          register={register("password", {
            required: {
              value: true,
              message: "비밀번호를 입력해주세요.",
            },
          })}
          placeholder="비밀번호 입력"
          type="password"
        />
        <ValidDiv>
          {errors.email && <AuthValidMessage text={errors.email.message} />}
          {errors.password && (
            <AuthValidMessage text={errors.password.message} />
          )}

          <AuthValidMessage text={errorMessage} />
        </ValidDiv>

        <AuthPostButton
          type="submit"
          text="로그인"
          isActive={true}
          disabled={isLoading}
        />
      </form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  background-color: white;
  padding: 5%;
  width: 100%;
`;

const ValidDiv = styled.div`
  width: 100%;
  min-height: 10px;
`;
