import { useContext } from "react"
import { Shopcontext } from "./shopcontext"

const Searchbar=()=>{
    const {search,setsearch,showsearch,setshowsearch} =useContext(Shopcontext)
  return showsearch ? (
  <div className="searchbar">
    <div className="searchbar__wrapper">
      <input
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <span onClick={() => setshowsearch(false)} className="searchbar__cross">
        ✕
      </span>
    </div>
  </div>
) : null
}
export default Searchbar