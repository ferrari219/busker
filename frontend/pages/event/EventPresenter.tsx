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
  loading: boolean;
}

const EventPresenter = ({ loading }: IeventProps) => {
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
                <EventLi />
                <EventLi />
                <EventLi />
              </EventUl>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default EventPresenter;
