import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styles from "../scssPages/Search.modules.scss?inline";
import PageResult from "./query/PageResult.jsx";
import { activitiesMock } from "../../mock/activitiesMock";
import { attractionsMock } from "../../mock/attractionsMock";
export default function Search() {
  const [searchParams] = useSearchParams();

  const allElemenntsArray = [...activitiesMock, ...attractionsMock];

  const FilteredObj = allElemenntsArray.filter(
    (element) => element.name === `${searchParams.get("q")}`
  );

  return (
    <div>
      {FilteredObj.length > 0 ? (
        FilteredObj.map((item) => <PageResult data={item} key={item.name} />)
      ) : (
        <p>Nessun risultato trovato. Provate ad essere più specifici </p>
      )}
    </div>
  );
}
