import { SearchIcon } from "@heroicons/react/solid";
import {useState} from 'react'
import { useRecoilState } from "recoil";
import searchInputState from "../../atoms/searchInputAtom";
const SideBarSearchBar = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  return (
    <div className="flex border-b border-gray-selected">
      <div className="flex justify-center my-2 mx-3 bg-gray-light w-full h-[35px] rounded-md ">
        <SearchIcon className="w-6 h-6 mt-1 ml-2 mr-5 text-gray-icons" />
        <input
        value={searchInput}
        onChange={handleChange}
          type="text"
          className="box-border w-full overflow-clip  rounded-md bg-gray-light border-none outline-none placeholder-gray-placeholder text-ellipsis text-white-mssg"
          placeholder="Busca un chat o inicia uno nuevo"
        />
      </div>
    </div>
  );
};

export default SideBarSearchBar;
