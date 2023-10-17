"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./SearchBox.css";
import UrlGen from "../utils/SlugGen";

interface Props {
  props: {
    content: string;
    className: string;
    classNameUl: string;
    classNameLi: string;
    classNameLink: string;
    inputId: string;
    n: number;
  };
}

function SearchBox({ props }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([
    {
      id: "",
      common_name: "",
      scientific_name: "",
      type: "",
    },
  ]);
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
    if (term.length > 0) {
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
        placeholder="Search for plants, plant disease & solutions and blogs..."
        className="w-[95%] h-[40px] focus:outline-none px-[15px] bg-transparent"
        maxLength={200}
        value={searchTerm}
        onChange={handleChange}
        id={props.inputId}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={searchRef}
        autoComplete="off"
        autoFocus
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
              href={`/api/search?q=${searchTerm}`}
              className={props.classNameLink}
            >
              {searchTerm}
            </Link>
          </li>
          {results[0].id != "" &&
            results.slice(0, props.n).map(
              (
                result: {
                  id: string;
                  type: string;
                  common_name: string;
                  scientific_name: string;
                },
                index
              ) => (
                <li key={index} className={props.classNameLi}>
                  <Link
                    href={UrlGen(
                      result.type.toLowerCase(),
                      result.scientific_name
                    )}
                    className={props.classNameLink}
                  >
                    <div className="flex">
                      <h4 className="font-semibold">{result.common_name}</h4>
                      <h5 className="text-gray-700 italic">
                        &nbsp;&#40;{result.scientific_name}&#41;
                      </h5>
                    </div>
                    <div
                      className={`rounded-full px-[7px] text-[12px] capitalize ${
                        result.type == "PLANTS"
                          ? "bg-green-400"
                          : result.type == "PESTS"
                          ? "bg-red-400"
                          : result.type == "BLIGHTS"
                          ? "bg-red-400"
                          : result.type == "PESTICIDES"
                          ? "bg-yellow-400"
                          : "bg-blue-400"
                      }`}
                    >
                      {result.type.toLowerCase()}
                    </div>
                  </Link>
                </li>
              )
            )}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
