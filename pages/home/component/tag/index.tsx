import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  item: string;
  type: "normal" | "delete";
  checkList?: string[];
  setCheckList?: (value: string[]) => void;
};

const Tag = ({ item, type, checkList = [], setCheckList }: Props) => {
  return (
    <TagContainer
      type={type}
      on={checkList.includes(item)}
      onClick={() => {
        if (setCheckList && checkList.includes(item)) {
          setCheckList(checkList.filter((tag) => tag !== item));
        } else if (setCheckList) {
          setCheckList([...checkList, item]);
        }
      }}
    >
      {"#" + item}
      {type === "delete" && <CloseIcon w="5px" h="5px" mt="5px" ml="8px" />}
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div<{ type: string; on: boolean }>`
  padding: ${({ type }) =>
    type === "delete" ? "2px 6px 2px 6px" : "3px 8px 3px 8px"};
  margin-right: ${({ type }) => (type === "delete" ? 8 : 8)}px;
  margin-bottom: ${({ type }) => (type === "delete" ? 4 : 8)}px;
  background: ${({ type, on }) =>
    type === "delete" ? "#e8ecf9" : on ? "#BDC7D2" : "white"};

  display: flex;
  flex-direction: row;

  font-family: Pretendard;
  font-size: ${({ type }) => (type === "delete" ? 10 : 14)}px;
  font-weight: 500;
  color: ${({ type, on }) =>
    type === "delete" ? "black" : on ? "#2D3748" : "rgba(0,0,0,0.3)"};
  border-radius: 4px;
`;
