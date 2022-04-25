import { useEffect, useState } from "react";
import { db, getDocs, collection } from "../../firebase/firebase-config";
import { PlaceCard } from "./PlaceCard";

export const PlaceList = () => {
  // const { places} = useSelector( state => state.place );

  const [lista, getlista] = useState([]);

  useEffect(() => {
    const setlista = async () => {
      try {
        const placesSnap = await getDocs(collection(db, `places`));
        const places = [];

        placesSnap.forEach((doc) => {
          places.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        getlista(places);
      } catch (error) {
        console.log(error);
      }
    };
    setlista();
  }, [lista]);

  return (
    <>
      <div className="container  mx-10 my-20  border-black border rounded  ">
        <p className="text-2xl font-bold p-2 m-2">Categoría </p>
        <div className="grid grid-cols-4  ">
          {lista.map((places) => (
            <PlaceCard key={places.id} {...places} />
          ))}
        </div>
      </div>
    </>
  );
};
