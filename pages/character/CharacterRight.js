import Link from "next/link";

export default function CharacterRight(props) {
  const { character } = props;

  return (
    <div className="item row py-4 my-2">
      <div className="hover-effect col-lg-10">
        <Link
          href={`/character/${character.id}`}
          className="hover:tw-text-[#ec6090] tw-text-white
        "
        >
          <h4 className="tw-text-2xl tw-font-bold tw-text-inherit tw-transition-colors tw-duration-300">
            {character.name}
          </h4>
        </Link>
        <p className="tw-text-gray-300">{character.description}</p>
      </div>
      <div className="col-lg-2">
        <img
          src={character.img}
          alt={character.name}
          className="tw-text-white"
        />
      </div>
    </div>
  );
}
