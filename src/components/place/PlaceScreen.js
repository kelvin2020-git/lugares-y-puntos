import { useSelector } from "react-redux";
import { PlaceList } from "./PlaceList";
import { DetailsPlace } from "./DetailsPlace";
export const PlaceScreen = () => {
  const { active } = useSelector((state) => state.place);
  return <>{active ? <DetailsPlace /> : <PlaceList />}</>;
};
