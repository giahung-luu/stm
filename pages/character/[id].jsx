import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCharacterById } from "../../services/characterService";

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
