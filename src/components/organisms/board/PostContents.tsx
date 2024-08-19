import styled from "styled-components";

import color from "../../../styles/color";

import { PostType, GeneralPostType } from "../../../types/postType";
import { RecommendType } from "../../../types/recommendPostType";

import PostInfo from "./PostInfo";
import LikeBtn from "../../atoms/common/LikeBtn";
import RecommendContents from "../../atoms/recommendBoard/RecommendContents";

type Props = {
  type: PostType;
  post: GeneralPostType;
};

const PostContents = ({ type, post }: Props) => {
  const { content, like } = post;

  return (
    <Container>
      <PostInfo type={type} post={post} />

      <GrayLine />

      {type === "recommend" && (
        <RecommendContents
          recommend={post?.recommend as RecommendType}
          link={post?.link as string}
        />
      )}

      <ContentsWrapper dangerouslySetInnerHTML={{ __html: content }} />

      <LikeBtnWrapper>
        <LikeBtn count={like.count} like={like.like} />
      </LikeBtnWrapper>
    </Container>
  );
};

export default PostContents;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GrayLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.COLOR_LIGHTGRAY_BORDER};
`;

const ContentsWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const LikeBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
