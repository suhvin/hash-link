import { LinkCollection } from "@/firebase/collection/link";
import AddModal from "@/pages/component/modal/add-modal";
import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { link } from "fs";
import React, { useState } from "react";

type Props = {
  item: string;
  type: "normal" | "delete" | "AddModal";
  data: string[];
  linkId?: string;
  checkList?: string[];
  setCheckList?: (value: string[]) => void;
};

const Tag = ({
  item,
  type,
  data,
  linkId,
  checkList = [],
  setCheckList,
}: Props) => {
  const minusUserLinkTag = async (
    linkId: string,
    data: string[],
    tag: string
  ) => {
    await LinkCollection.updateUserLinkTag(
      "mXjlGHOIDkjz7YMuofHU",
      linkId,
      data.filter((tag) => tag !== item)
    );
  };
  const plusUserLinkTag = async (
    linkId: string,
    data: string[],
    tag: string
  ) => {
    await LinkCollection.updateUserLinkTag("mXjlGHOIDkjz7YMuofHU", linkId, [
      ...data,
      tag,
    ]);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <TagContainer
      type={type}
      on={checkList.includes(item)}
      isAdd={item === "@+add"}
      onClick={() => {
        if (type === "delete") {
          if (item === "@+add") {
            setIsOpen(true);
          } else {
            minusUserLinkTag(linkId ?? "", data, item);
          }
        } else {
          if (type === "AddModal") {
            plusUserLinkTag(linkId ?? "", data, item);
          } else {
            if (setCheckList && checkList.includes(item)) {
              setCheckList(checkList.filter((tag) => tag !== item));
            } else if (setCheckList) {
              setCheckList([...checkList, item]);
            }
          }
        }
      }}
    >
      {item === "@+add" ? " + " : "#" + item}
      {type === "delete" && item !== "@+add" && (
        <CloseIcon w="5px" h="5px" mt="5px" ml="8px" />
      )}
      <AddModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={data}
        linkId={linkId}
      />
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div<{ type: string; on: boolean; isAdd: boolean }>`
  padding: ${({ type }) =>
    type === "delete" ? "2px 6px 2px 6px" : "3px 8px 3px 8px"};
  margin-right: ${({ type }) => (type === "delete" ? 8 : 8)}px;
  margin-bottom: ${({ type }) => (type === "delete" ? 8 : 8)}px;
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
