import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { auth, database } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Button, Pagination } from "react-bootstrap";
import Characters from "./character/Characters";
import { getCharacters } from "../services/characterService";
import { eventYear } from "../lib/store";
import { getCharactersByYearRange } from "../services/characterService";
function ListCharacter({ totalPostCount }) {
  const router = useRouter();
  const [characters, setCharacters] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const itemPerPage = 3;
  const totalPage = Math.ceil(characters.length / itemPerPage);
  const arrayPage = Array.from(Array(totalPage).keys());

  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (!user) {
    //     router.push("auth/signin");
    //   }
    // });
  }, [auth]);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const items = arrayPage.map((number) => (
    <Pagination.Item
      key={number}
      active={number === page}
      onClick={() => setPage(number)}
    >
      {number + 1}
    </Pagination.Item>
  ));

  const eventChange = (e) => {
    const start =
      e.target.options[e.target.selectedIndex].getAttribute("attr-start");
    const end =
      e.target.options[e.target.selectedIndex].getAttribute("attr-end");
    getCharactersByYearRange(start, end)
      .then((data) => {
        setCharacters(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="row list-character-page">
        <Head>
          <title>List Character</title>
        </Head>
        <div className="col-lg-8">
          <div className="featured-games header-text" style={{ width: "140%" }}>
            <div className="heading-section">
              <h4>
                <em>Nhân Vật</em> <span className="">Lịch Sử</span>
                <select
                  className="tw-mt-3 tw-rounded tw-pl-2 tw-pr-5 focus:tw-outline-none tw-w-full tw-py-1 tw-text-2xl"
                  onChange={eventChange}
                >
                  {eventYear.map((item, index) => (
                    <option
                      key={index}
                      value=""
                      attr-start={item.startTime}
                      attr-end={item.endTime}
                      className="tw-text-2xl"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </h4>
            </div>
            <Characters
              character1={characters[(page + 1) * itemPerPage - 3]}
              character2={characters[(page + 1) * itemPerPage - 2]}
              character3={characters[(page + 1) * itemPerPage - 1]}
            />
          </div>
        </div>
      </div>

      <Pagination style={{ justifyContent: "center" }}>{items}</Pagination>
    </>
  );
}

ListCharacter.layout = "default";
export default ListCharacter;
