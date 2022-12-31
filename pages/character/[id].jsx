import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCharacterById } from "../../services/characterService";
import Link from "next/link";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState({});
  useEffect(() => {
    getCharacterById(id)
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className=" tw-text-white">
        <Link
          href="/list-character"
          className={router.pathname === "/list-character" ? "active" : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="tw-w-6 tw-h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
      </div>

      {character && (
        <div className="item row py-4 my-2">
          <div className="col-lg-2">
            <img
              src={character.img}
              alt={character.name}
              className="tw-rounded hover:tw-scale-110 tw-transition-all tw-duration-300"
            />
          </div>
          <div className="hover-effect col-lg-10">
            <h4 className="tw-text-2xl tw-font-bold tw-mb-2">
              {character.name}
            </h4>
            {/* <p className="tw-text-white tw-mb-2">{character.description}</p> */}
            <ul className="tw-ml-6 tw-mb-4">
              {character?.detail_description?.map((item, index) => (
                <li
                  key={index}
                  className="tw-text-gray-300 tw-list-disc tw-mb-1"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="tw-text-2xl tw-font-bold tw-mb-2">
              Sự kiện nổi bật
            </h4>
            <ul className="tw-ml-6 tw-mb-4">
              {character?.event?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="tw-text-gray-300 tw-list-disc tw-mb-1"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

Character.layout = "default";
export default Character;
