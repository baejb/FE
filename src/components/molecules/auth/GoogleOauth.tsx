import styled from "styled-components";
import color from "../../../styles/color";
import { FaGoogle } from "react-icons/fa";
import { APIURL } from "../../../config";
const GoogleOauth = () => {
  const link = `${APIURL}/oauth2/authorization/google`;
  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <OauthBtn type="button" className="OauthBtn" onClick={loginHandler}>
      <GoogleIcon size="1rem" />
      　구글 계정으로 로그인 하기
    </OauthBtn>
  );
};

export default GoogleOauth;

const OauthBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  border: 3px solid ${color.COLOR_BLUE_AUTH_BUTTON};
  border-radius: 50px;
  background-color: white;
  text-align: center;
  text-decoration: none;
  padding: 10px 24px;

  cursor: pointer;
  border-radius: 30px;
  margin-top: 0.2rem;
  white-space: nowrap;
  &:hover {
    filter: brightness(95%);
  }
`;

const GoogleIcon = styled(FaGoogle)`
  paddings-top: 0.2rem; /* Adjust this value to move the icon down */
`;
