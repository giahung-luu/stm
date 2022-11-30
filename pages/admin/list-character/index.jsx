import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Character from "./Character";
import Modal from "./Modal";
import { getCharacters } from "../../../services/characterService";

function ListCharacter({ color }) {
  const [characters, setCharacters] = React.useState([]);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <>
      <div
        className={
          "tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-lg tw-rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
          <div className="tw-flex tw-flex-wrap tw-items-center">
            <div className="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1">
              <h3
                className={
                  "tw-font-semibold tw-text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Character
              </h3>
            </div>
            <button
              className="tw-py-1 tw-px-4 tw-bg-lightBlue-500 tw-text-white tw-rounded-lg hover:tw-text-lightBlue-500 hover:tw-bg-white tw-border tw-border-lightBlue-500"
              onClick={() => {
                setSelectedCharacter(null);
                setShowModal(true);
              }}
            >
              Add character
            </button>
          </div>
        </div>
        <div className="tw-block tw-w-full tw-overflow-x-auto">
          {/* Projects table */}
          <table className="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Image Link
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Description Detail
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Time Start
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Time End
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {characters.map((character) => (
                <Character
                  character={character}
                  setCharacters={setCharacters}
                  color={color}
                  setSelectedCharacter={setSelectedCharacter}
                  setShowModal={setShowModal}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
          setCharacters={setCharacters}
        />
      ) : null}
    </>
  );
}
ListCharacter.layout = "admin";
ListCharacter.defaultProps = {
  color: "light",
};

ListCharacter.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
export default ListCharacter;
