import Link from "next/link";
import { getCharacters } from "../../services/characterService";
function Arena({ characters }) {
  return (
    <div className="Arena">
      <h2 className="tw-text-center">Arena</h2>
      <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-6 tw-mt-6">
        {characters?.map((item, index) => (
          <Link
            className="tw-col-span-1 tw-overflow-hidden"
            key={index}
            href={`/arena/${item.id}`}
          >
            <div className="card-container">
              <div className="card-background">
                <div id="particles-js">
                  <div className="character-image">
                    <div className="image tw-rounded">
                      <img src={item.img} />
                    </div>
                  </div>
                  <div className="character-information">
                    <h2 className="name">{item.name}</h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
Arena.layout = "default";
export async function getStaticProps() {
  const characters = await getCharacters();
  if (!characters) {
    return {
      notFound: true,
    };
  }
  return {
    props: { characters },
  };
}
export default Arena;
