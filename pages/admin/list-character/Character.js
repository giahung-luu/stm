import { deleteCharacter } from "../../../services/characterService";
import { notify } from "../../../components";
import { eventYear } from "../../../lib/store";

const Character = (props) => {
  const {
    character,
    color,
    setSelectedCharacter,
    setShowModal,
    setCharacters,
  } = props;

  const handleRemoveCharacter = async () => {
    const data = await deleteCharacter(character.id);
    if (data.id) {
      setCharacters((characters) =>
        characters.filter((character) => character.id !== data.id)
      );
      notify("success", "Character deleted successfully");
    } else {
      notify("error", "Something went wrong");
    }
  };

  return (
    <tr>
      <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-left tw-flex tw-items-center"> 
      {
        <span
          className={
            "tw-ml-3 tw-font-bold " +
            +(color === "light" ? "text-blueGray-600" : "text-white")
          }
        >
          {character.name}
        </span>
      </th>
      <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs p-4">
        {character.description}
      </td>
      <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
        <i className="tw-fas tw-fa-circle tw-text-orange-500 tw-mr-2"></i>{" "}
        <img src={character.img} alt={character.name} />
      </td>
      <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs p-4">
        {character.detail_description}
      </td>
      <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs p-4">
        {character.time_start}
      </td>
      <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs p-4">
        {character.time_end}
      </td>
      <td className="tw-order-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
        <div
          className="tw-flex tw-items-center"
          onClick={() => {
            setShowModal(true);
            setSelectedCharacter(character);
          }}
        >
          <span className="tw-mr-2">
            <i className="tw-fas tw-fa-circle tw-text-orange-500">Edit</i>{" "}
          </span>
        </div>
        <div
          className="tw-flex tw-items-center"
          onClick={handleRemoveCharacter}
        >
          <span className="tw-mr-2">
            <i className="tw-fas tw-fa-circle tw-text-orange-500">Delete</i>{" "}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default Character;
