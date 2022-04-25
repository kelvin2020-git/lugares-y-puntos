
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  activePlace,
  startDeleting,
  startNewRefe
} from "../../actions/place";
import appland from "../ui/appland.png";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

export const DetailsPlace = () => {
  const navigate = useNavigate();
  const { active: note } = useSelector((state) => state.place);
  const [formValues] = useForm(note);
  const { id,name, category, status, rang, lat, long, url } = formValues;
  const dispatch = useDispatch();
  const handleeditar = () => {
    dispatch(
      activePlace(id, {
        name,
        category,
        status,
        rang,
        lat,
        long,
        url,
      })
    );
  };
  const handleDelete = () => {
    Swal.fire({
      title: "¿Desea eliminar este lugar?",
      text: "Sus datos se borraran de formar permanente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.value) {
        navigate(-1);
        dispatch(startDeleting(id));
        console.log("*si se elimino el lugar*");
      } else {
        console.log("*no se elimino el lugar*");
      }
    });
  };



  const handleReturn = () => {
    navigate(-1);
  };

  const handleAddRefe = () => {
    console.log(id);

    dispatch(startNewRefe(id));
  };

  

  return (
    <>
      <nav
        className="flex items-center justify-between flex-wrap bg-neutral-300
         p-6"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={appland} alt="imagen" />
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div></div>
        </div>
        <div></div>
      </nav>

      <div className="container  mx-10 my-16  border-black border rounded  ">
        <div className="grid grid-cols-3 ml-2 mr-10">
          <div className="grid grid-cols-1 p-2 ml-6">
            <h5 className="text-2xl ml-28">Detalles</h5>
            <img src={url} alt="imagen" className="w-72 h-56 ml-3 p-4" />
            <h5 className=" text-2xl ml-28 mt-3">Ubicacion</h5>
            <div className="w-72 h-48 p-4 ml-7 mb-4 bg-neutral-500"></div>
          </div>
          <div className="  mr-7 mt-3  ">
            <h3 className="ml-3 text-2/1">{name}</h3>
            <div className="flex mt-2 mr-5">
              <label className="w-10 h-8 mt-1 "> Categoria: </label>
              <label className=" w-40   h-8 px-1 py-1 text-gray-400 border rounded-md border-gray-500 ml-14">
                {category}
              </label>
            </div>

            <div className="flex mt-2">
              <label className="w-10 h-8 mt-1 "> Estado: </label>
              <label className=" w-40   h-8 px-1 py-1 text-gray-400 border rounded-md border-gray-500 ml-14">
                {status}
              </label>
            </div>

            <div className="flex mt-2">
              <label className="w-10 h-8 mt-1 "> Distancia: </label>
              <p className=" w-40   h-8 px-1 py-1 text-gray-400 border rounded-md border-gray-500 ml-14">
                {rang}
              </p>
            </div>

            <div className="flex mt-2">
              <label className="w-10 h-8 mt-1 "> Referencias: </label>
              <div className=" w-40   h-8 px-1 py-1  ml-14"></div>
            </div>

            <div className="grid grid-cols-2">
              <p>
                <label className=" mt-2"> Latitud </label>
                <p className=" w-40   h-8 px-1 py-1 text-gray-400 border rounded-md border-gray-500 ">
                  {lat}
                </p>
              </p>

              <p>
                <label className=" mt-2"> Longitud </label>
                <p className=" w-40   h-8 px-1 py-1 text-gray-400 border rounded-md border-gray-500 ">
                  {long}
                </p>
              </p>
            </div>
            <button
              className=" m-10 h-9 ml-10  border rounded text-gray-400 border-gray-400 hover:border-transparent hover:text-teal-500 hover:bg-white "
              onClick={handleReturn}
            >
              Regresar
            </button>

            <div className="grid grid-cols-1 mt-12 ">
              <Link
                className="  p-1 ml-60  mr-10 w-14 text-center border rounded-md hover:border-transparent text-white hover:text-white hover:bg-cyan-300 border-cyan-600 bg-cyan-500"
                to={`nuevo/`}
              >
                Nuevo
              </Link>
            </div>
          </div>

          <div className=" container ">
            <p>
              <h5 className="text-2xl ml-28 m-1" onClick={handleAddRefe}>
                Puntos de referencias
              </h5>
              <div className="w-96 h-48 p-4 ml-7 mb-9 bg-neutral-500 ">
                {/* {refe.map((places) => (
                  <div key={places.id} {...places}>
                    <p className="text-black">{places.name}</p>
                    <button
                      className="  p-1 ml-20 mr-10 text-center border rounded text-white border-red-600  hover:border-transparent hover:text-white hover:bg-red-300  bg-red-400"
                      onClick={handleDeletere}
                    >
                      Eliminar
                    </button>
                  </div>
                ))} */}
              </div>
            </p>

            <div className="grid grid-cols-2 mt-48 ">
              <div>
                <Link
                  className=" mt-40 p-1  ml-20  mr-10 text-center border rounded text-white border-green-600 hover:border-transparent hover:text-white hover:bg-green-400 bg-green-500"
                  to={`editar/${id}`}
                  onClick={handleeditar}
                >
                  Editar
                </Link>
              </div>
              <div>
                <button
                  className="  p-1 ml-20 mr-10 text-center border rounded text-white border-red-600  hover:border-transparent hover:text-white hover:bg-red-300  bg-red-400"
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
