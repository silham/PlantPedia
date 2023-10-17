"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";

interface Props {
  props: {
    content: string;
    className: string;
    classNameUl: string;
    classNameLi: string;
    classNameLink: string;
    n: number;
  };
}

interface Result {
  result: { url: string; text1: string; type: string };
}

interface Option {
  value: string;
  label: string;
}

function SearchBox({ props }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const options = [
    { value: "plants", label: "Plants" },
    { value: "pests", label: "Pests" },
    { value: "blights", label: "Blights" },
    { value: "pesticides", label: "Pesticides" },
    { value: "blogs", label: "Blogs" },
  ];

  let term = "";
  const handleChange = () => {
    if (searchRef.current !== null) {
      term = searchRef.current.value;
    }
    setSearchTerm(term);

    /*// Make a request to the server with the search term
    axios.get(`http://localhost:8800/searchbar/${term}`).then((response) => {
      console.log(response.data);

      // Concatenate the results and update the state
      setResults(response.data);
    });*/
  };

  const clearSearch = () => {
    if (searchRef.current !== null) {
      searchRef.current.value = "";
    }

    setSearchTerm("");
    handleChange();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 500);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.value = props.content;
      setSearchTerm(props.content);
    }
  }, []);

  return (
    <div className={props.className} ref={containerRef}>
      <input
        type="text"
        spellCheck="false"
        placeholder="Search for plants, plant disease, solutions and blogs..."
        className="w-[85%] h-[40px] focus:outline-none px-[15px] bg-transparent"
        maxLength={200}
        value={searchTerm}
        onChange={handleChange}
        id="searchBar"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={searchRef}
      />
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <div
        className="bg-black w-[32px] h-[32px] rounded-full mr-[4px] flex justify-center items-center cursor-pointer"
        onClick={clearSearch}
      >
        <i
          className={`text-[22px] text-white ${
            searchTerm ? "ri-close-line" : "ri-search-2-line"
          }`}
        ></i>
      </div>
      {searchTerm && isFocused && (
        <ul className={props.classNameUl}>
          <li className={props.classNameLi}>
            <Link
              href={`/search/${searchTerm}`}
              className={props.classNameLink}
            >
              {searchTerm}
            </Link>
          </li>
          {results.slice(0, props.n).map(({ result }: Result, index) => (
            <li key={index} className={props.classNameLi}>
              <Link href={result.url} className={props.classNameLink}>
                <h4>{result.text1}</h4>
                <div
                  className={`rounded-full px-[7px] text-[12px] capitalize ${
                    result.type == "plant"
                      ? "bg-green-400"
                      : result.type == "disease"
                      ? "bg-red-400"
                      : result.type == "solution"
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                  }`}
                >
                  {result.type}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;