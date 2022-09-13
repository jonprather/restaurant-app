import PuffLoader from "react-spinners/PuffLoader";
import { useIsFetching } from "react-query";
export default function Loading({ isLoading = false, color = "black" }) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    // SET to absolute in order to not visually move the animations for cards
  };
  const isFetching = useIsFetching();
  if (isLoading) {
    return (
      <PuffLoader color={color} loading={isLoading} css={override} size={150} />
    );
  }
  return <PuffLoader loading={isFetching} css={override} size={150} />;
}
{
  /* <PuffLoader color={color} loading={isFetching} css={override} size={150} /> */
}
// TODO this is jank falling in grid not in center
