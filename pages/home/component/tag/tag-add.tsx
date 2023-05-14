import { LinkCollection } from "@/firebase/collection/link";
import AddModal from "@/pages/component/modal/add-modal";
import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { link } from "fs";
import React, { useState } from "react";

type Props = {
  item: string;
  type: "AddModal";
  data: string[];
  data2: string[];
  linkId?: string;
  checkList?: string[];
  setCheckList?: (value: string[]) => void;
};

const TagAdd = ({
  item,
  type,
  data,
  data2,
  linkId,
  checkList = [],
  setCheckList,
}: Props) => {
  const plusUserLinkTag = async (
    linkId: string,
    data2: string[],
    tag: string
  ) => {
    await LinkCollection.updateUserLinkTag("mXjlGHOIDkjz7YMuofHU", linkId, [
      ...data2,
      tag,
    ]);
  };

  return (
    <TagContainer
      type={type}
      on={checkList.includes(item)}
      isAdd={item === "@+add"}
      onClick={() => {
        plusUserLinkTag(linkId ?? "", data2, item);
      }}
    >
      {"#" + item}
    </TagContainer>
  );
};

export default TagAdd;

const TagContainer = styled.div<{ type: string; on: boolean; isAdd: boolean }>`
  padding: ${({ type }) =>
    type === "delete" ? "2px 6px 2px 6px" : "3px 8px 3px 8px"};
  margin-right: ${({ type }) => (type === "delete" ? 8 : 8)}px;
  margin-bottom: ${({ type }) => (type === "delete" ? 4 : 8)}px;
  background: ${({ type, on, isAdd }) =>
    type === "delete"
      ? isAdd
        ? "rgba(0,0,0,0.05)"
        : "#e8ecf9"
      : on
      ? "#BDC7D2"
      : type === "AddModal"
      ? "#BDC7D2"
      : "white"};

  display: flex;
  flex-direction: row;

  font-family: Pretendard;
  font-size: ${({ type }) => (type === "delete" ? 10 : 14)}px;
  font-weight: 500;
  color: ${({ type, on }) =>
    type === "delete"
      ? "black"
      : on
      ? "#2D3748"
      : type === "AddModal"
      ? "#2D3748"
      : "rgba(0,0,0,0.3)"};
  border-radius: 4px;
`;
