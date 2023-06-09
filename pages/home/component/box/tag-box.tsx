import styled from "@emotion/styled";
import React from "react";
import Tag from "../tag";

type Props = {
  data: string[];
  linkId?: string;
  type: "view" | "add" | "AddModal";
  checkList?: string[];
  setCheckList?: (value: string[]) => void;
};

const TagBox = ({
  data = [],
  type,
  checkList = [],
  setCheckList,
  linkId,
}: Props) => {
  return (
    <TagBoxContainer type={type}>
      {(type === "view" ? [...data, "@+add"] : data).map((item, index) => {
        return (
          <Tag
            key={index}
            item={item}
            data={data}
            linkId={linkId}
            type={
              type === "view"
                ? "delete"
                : type === "AddModal"
                ? "AddModal"
                : "normal"
            }
            checkList={checkList}
            setCheckList={setCheckList}
          />
        );
      })}
    </TagBoxContainer>
  );
};

export default TagBox;

const TagBoxContainer = styled.div<{ type: string }>`
  width: 100%;
  padding-right: ${({ type }) => (type === "view" ? "20" : "0")}px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
