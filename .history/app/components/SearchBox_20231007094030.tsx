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
  const [results, setResults] = useState([
    {
      id: "abelmoschus_caillei",
      common_name: "West African okra",
      scientific_name: "Abelmoschus caillei",
      decription:
        "Abelmoschus caillei, the West African okra, is a plant species in the family Malvaceae. It occurs in humid areas of West and Central Africa, where it is used as a vegetable. It originated as an allopolyploid hybrid of Abelmoschus esculentus and A. manihot, and is often mistaken for either of those two plants",
      img: "",
      type: "PLANTS",
    },
    {
      id: "abelmoschus_esculentus",
      common_name: "Okra, Lady’s fingers",
      scientific_name: "Abelmoschus esculentus",
      decription:
        "Okra, known in some English-speaking countries as lady’s fingers, is a flowering plant in the mallow family. It has edible green seed pods. The geographical origin of okra is disputed, with supporters of West African, Ethiopian, Southeast Asian, and South Asian origins",
      img: "Abelmoschus-caillei-1.jpg",
      type: "PLANTS",
    },
    {
      id: "musa_spp",
      common_name: "Banana",
      scientific_name: "Musa spp.",
      decription:
        'Musa is one of three genera in the family Musaceae. The genus includes 83 species of flowering plants producing edible bananas and plantains. Though they grow as high as trees, banana and plantain plants are not woody and their apparent "stem" is made up of the bases of the huge leaf stalks. Thus, they are technically gigantic herbaceous plants.',
      img: "musa-spp-1.jpg",
      type: "PLANTS",
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
    try {
      const res = await fetch(
        `http://localhost:3000/api/searchbar?q=${term}&type=${type}`
      );
      const data = await res.json();
      console.log(data);
      // Use a promise to ensure that the `data` variable is defined before you set the `results` variable.
      const resultsPromise = new Promise((resolve) => {
        resolve(data);
      });

      // Set the `results` variable to the `data` variable using the promise.
      resultsPromise.then((data) => {
        setResults((prevState) => data);
      });
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
