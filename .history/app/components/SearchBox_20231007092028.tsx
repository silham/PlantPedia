"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./SearchBox.css";

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
  result: {
    type: string;
    common_name: string;
    scientific_name: string;
    id: string;
  };
}

interface Option {
  value: string;
  label: string;
}

interface Res {
  id: string;
  common_name: string;
  scientific_name: string;
}

function SearchBox({ props }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  let type = "";
  let term = "";
  const handleChange = async () => {
    if (searchRef.current !== null) {
      term = searchRef.current.value;
    }
    setSearchTerm(term);
    try {
      const res = await fetch(
        `http://localhost:3000/api/searchbar?q=${term}&type=${type}`
      );
      const data = await res.json();
      console.log(data);
      setResults(data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
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
        className="w-[95%] h-[40px] focus:outline-none px-[15px] bg-transparent"
        maxLength={200}
        value={searchTerm}
        onChange={handleChange}
        id="searchBar"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={searchRef}
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
          {results.length > 0 &&
            results.slice(0, props.n).map(({ result }: Result, index) => (
              <li key={index} className={props.classNameLi}>
                <Link href={result.type} className={props.classNameLink}>
                  <h4>{result.common_name}</h4>
                  <h5>&#40;{result.scientific_name}&#41;</h5>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
