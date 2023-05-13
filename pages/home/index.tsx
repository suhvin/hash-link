import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Margin from "../component/margin";
import SlackBox from "./component/box/slack-box";
import LinkListBox from "./component/box/link-list-box";
import { LinkType } from "../../firebase/type/link";
import { getLinkList } from "../api";
import { LinkCollection } from "@/firebase/collection/link";
import MainModal from "../component/modal";

type Props = {
  data: LinkType[];
};

const MainHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getLinkList("mXjlGHOIDkjz7YMuofHU");
  }, [data]);

  const getLinkList = async (userId: string) => {
    const linkList = await LinkCollection.readLinkList(userId);
    setData(linkList);
    return linkList;
  };

  const addLinkData = async (linkData: LinkType) => {
    LinkCollection.addLink("mXjlGHOIDkjz7YMuofHU", linkData);
  };

  return (
    <HomeContainer>
      <CenterContainer>
        <Margin h={36} />
        {/* <div className="marginImg">
          <Image
            src="/asset/common/svg/ic-bars-3.svg"
            alt=""
            width={33}
            height={28}
          />
        </div> */}
        <Margin h={16} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Title>
            Welcome to,
            <br />
            <span className="bold">HASH LINK</span>
          </Title>
          <div className="marginImg2">
            <Image src="/logo.png" alt="" width={54} height={48} />
          </div>
        </div>
        <SlackBox />
        <Margin h={44} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Title>
            <span className="bold">MY LINKS</span>
          </Title>
          <AddBtn onClick={() => setIsOpen(true)}>ADD LINK</AddBtn>
        </div>
        <Margin h={30} />
        <LinkListBox data={data} />
        <Margin h={80} />
      </CenterContainer>
      <MainModal isOpen={isOpen} setIsOpen={setIsOpen} func={addLinkData} />
    </HomeContainer>
  );
};

// export async function getStaticProps() {
//   // `getData` 함수를 호출하여 데이터를 가져옵니다.
//   console.log("datadfdf");
//   const data = await getLinkList("mXjlGHOIDkjz7YMuofHU");
//   console.debug("data", data);
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default MainHome;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f1f3ff;
  overflow: scroll;
`;

const CenterContainer = styled.div`
  width: 300px;
  height: 100vh;
  margin: 0 auto;
  .marginImg {
    margin-left: -5px;
  }
  .marginImg2 {
    margin-left: 10px;
    margin-top: 0px;
  }
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  .bold {
    font-weight: 700;
  }
`;

const AddBtn = styled.button`
  width: 60px;
  height: 25px;
  border-radius: 4px;
  margin-top: 2px;
  background: #de0a0a;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  color: #ffffff;
`;
