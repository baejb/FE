import AlbumPageTemplate from "../templates/album/AlbumPageTemplate";

const RecentReview = () => {
  return (
    <>
      <AlbumPageTemplate
        category="최근 평가된 앨범"
        albumType="recent"
      ></AlbumPageTemplate>
    </>
  );
};

export default RecentReview;
