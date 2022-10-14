import PuffLoader from "react-spinners/PuffLoader";
import { useIsFetching } from "react-query";
const overrideStyle = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  // SET to absolute in order to not visually move the animations for cards
};
export default function Loading({
  isLoading = false,
  override = overrideStyle,
  color = "black",
}) {
  const isFetching = useIsFetching();
  if (isLoading) {
    return (
      <PuffLoader
        color={color}
        loading={isLoading}
        css={override}
        size={150}
        //TODO can try passing rem here instead to make it fit better in the cart container on mobile
        className='absolute left-2/4 -translate-x-2/4 z-50'
      />
      // TODO it shows behind the card element ie menu item
    );
  }
  return (
    <PuffLoader
      color={color}
      loading={isFetching}
      cssOverride={override}
      size={150}
    />
  );
}
{
  /* <PuffLoader color={color} loading={isFetching} css={override} size={150} /> */
}
