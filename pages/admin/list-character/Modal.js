import {
  addCharacter,
  editCharacter,
} from "../../../services/characterService";
import { notify } from "../../../components";
import { useState } from "react";

const Modal = ({ selectedCharacter, setCharacters, setShowModal }) => {
  const isAddModal = !selectedCharacter;

  const [character, setCharacter] = useState({
    name: selectedCharacter?.name || "",
    description: selectedCharacter?.description || "",
    img: selectedCharacter?.img || "",
    detail_description: selectedCharacter?.detail_description || "",
    born: selectedCharacter?.born || "",
    dead: selectedCharacter?.dead || "",
    event: selectedCharacter?.event || "",
  });
  const handleAddCharacter = async (e) => {
    e.preventDefault();

    const newCharacter = character;

    const data = await addCharacter(newCharacter);
    if (data) {
      setCharacters((characters) => [...characters, data]);
      notify("success", "Character added successfully");
    } else {
      notify("error", "Something went wrong");
    }

    setShowModal(false);
  };

  const handleEditCharacter = async (e) => {
    e.preventDefault();
    const updatedCharacter = character;

    const data = await editCharacter(selectedCharacter.id, updatedCharacter);

    if (data) {
      setCharacters((characters) =>
        characters.map((character) =>
          character.id === selectedCharacter.id ? data : character
        )
      );
      notify("success", "Character updated successfully");
    } else {
      notify("error", "Something went wrong");
    }

    setShowModal(false);
  };

  return (
    <>
      <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none tw-focus:outline-none">
        <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
          {/*content*/}
          <form className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white tw-outline-none tw-focus:outline-none">
            {/*header*/}
            <div className="tw-flex tw-items-start tw-justify-between tw-p-5 tw-border-b tw-border-solid tw-border-blueGray-200 tw-rounded-t">
              <h3 className="tw-text-3xl tw-font-semibold tw-text-gray-700">
                {isAddModal ? "Add Character" : "Edit Character"}
              </h3>
              <button
                className="tw-p-1 tw-ml-auto tw-bg-transparent tw-border-0 tw-text-black tw-float-right tw-text-3xl tw-leading-none tw-font-semibold tw-outline-none focus:tw-outline-none"
                onClick={() => setShowModal(false)}
                type="button"
              >
                <span className="tw-text-black tw-h-6 tw-w-6 tw-text-2xl tw-block tw-outline-none focus:tw-outline-none hover:tw-opacity-50">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="tw-relative tw-p-6 tw-flex-auto">
              <div>
                <label htmlFor="name" className="tw-block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={character.name}
                  onChange={(e) =>
                    setCharacter({ ...character, name: e.target.value })
                  }
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                />
              </div>
              <div>
                <label htmlFor="description" class="tw-block">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="4"
                  id="description"
                  value={character.description}
                  onChange={(e) =>
                    setCharacter({ ...character, description: e.target.value })
                  }
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                ></textarea>
              </div>
              <div>
                <label htmlFor="img" className="tw-block">
                  Image Link
                </label>
                <input
                  type="text"
                  name="img"
                  id="img"
                  value={character.img}
                  onChange={(e) =>
                    setCharacter({ ...character, img: e.target.value })
                  }
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                />
              </div>
              <div>
                <label htmlFor="detail_description" className="tw-block">
                  Description Detail
                </label>
                <textarea
                  name="detail_description"
                  rows="4"
                  id="detail"
                  value={character.detail_description}
                  onChange={(e) =>
                    setCharacter({
                      ...character,
                      detail_description: e.target.value,
                    })
                  }
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                />
              </div>
              <div>
                <label htmlFor="event" className="tw-block">
                  Event
                </label>
                <textarea
                  name="event"
                  rows="4"
                  id="detail"
                  value={character.event}
                  onChange={(e) =>
                    setCharacter({
                      ...character,
                      event: e.target.value,
                    })
                  }
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                />
              </div>
              <div>
                <label htmlFor="born" className="tw-block">
                  Born
                </label>
                <input
                  type="text"
                  name="born"
                  id="born"
                  value={character.born}
                  onChange={(e) =>
                    setCharacter({
                      ...character,
                      born: e.target.value,
                    })
                  }
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                />
              </div>
              <div>
                <label htmlFor="dead" className="tw-block">
                  Dead
                </label>
                <input
                  type="text"
                  name="dead"
                  id="dead"
                  value={character.dead}
                  onChange={(e) =>
                    setCharacter({
                      ...character,
                      dead: e.target.value,
                    })
                  }
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="tw-flex tw-items-center tw-justify-end tw-p-6 tw-border-t tw-border-solid tw-border-blueGray-200 tw-rounded-b">
              <button
                className="tw-text-red-500 tw-background-transparent tw-font-bold tw-uppercase tw-px-6 tw-py-2 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-tw-transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="tw-bg-lightBlue-500 tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                onClick={isAddModal ? handleAddCharacter : handleEditCharacter}
              >
                {isAddModal ? "Add" : "Edit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="tw-opacity-25 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
    </>
  );
};
export default Modal;
