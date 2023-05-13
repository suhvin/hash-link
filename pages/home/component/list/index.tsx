import { LinkType } from "@/firebase/type/link";
import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import TagBox from "../box/tag-box";
import Margin from "@/pages/component/margin";

type Props = {
  item: LinkType;
};

const List = ({ item }: Props) => {
  return (
    <ListContainer>
      <img
        src={"http://www.google.com/s2/favicons?domain=" + item.url + "&sz=64"}
        alt=""
        className="favicon"
      />
      <div className="divColumn">
        <div className="divTitle">
          <p className="title">{item.title}</p>
          <CloseIcon w="10px" mt="2px" mr="8px" />
        </div>
        <Margin h={4} />
        <TagBox data={item.tag} />
      </div>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  width: 100%;
  padding: 6px;
  background: rgba(256, 256, 256, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  .favicon {
    width: 40px;
    height: 40px;
    margin-top: 4px;
  }
  .divColumn {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    .divTitle {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .title {
        font-family: "Pretendard";
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;
