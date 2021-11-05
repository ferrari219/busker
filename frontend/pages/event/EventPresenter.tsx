import Header from "@components/03_Organism/Header";
import Heads from "@components/99_Etc/Heads";
import React from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IconButton from "src/components/02_Molecules/IconButton";
import Nav from "@components/04_Templates/Nav";
import EventUl from "@components/02_Molecules/EventUl";
import EventLi from "@components/01_Atom/EventLi";
import Loader from "@components/04_Templates/Loader";

const mainStyle = css``;

interface IeventProps {
  event: Array<{
    id: number;
    key: number;
    company: string;
    promotion?: string | null;
    pic: string;
    lnk: string;
  }> | null;
  loading: boolean;
  error: string | null;
}

const EventPresenter = ({ event, loading, error }: IeventProps) => {
  // console.log(event);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Heads title="이벤트" />
          {/* <h1>이벤트</h1> */}
          <main>
            <section css={mainStyle}>
              <Header
                left={
                  <>
                    <IconButton
                      icon="IcoBack"
                      bgColor="transp"
                      onClick={() => history.back()}
                    />
                    <Nav bgColor="transp" shadow={false} />
                  </>
                }
                mid="이벤트"
                right={<IconButton icon="IcoUser" bgColor="transp" />}
              />
              <EventUl>
                {event &&
                  event.map(({ id, company, promotion, pic, lnk }) => (
                    <EventLi
                      key={id}
                      id={id}
                      company={company}
                      promotion={promotion}
                      pic={pic}
                      lnk={lnk}
                    />
                  ))}
                {/* <EventLi />
                <EventLi />
                <EventLi /> */}
              </EventUl>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default EventPresenter;
