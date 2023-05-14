import styled from "@emotion/styled";
import React from "react";
import Tag from "../tag";
import TagAdd from "../tag/tag-add";

type Props = {
  data: string[];
  data2: string[];
  linkId?: string;
  type: "AddModal";
  checkList?: string[];
  setCheckList?: (value: string[]) => void;
};

const TagBoxAdd = ({
  data = [],
  data2 = [],
  type,
  checkList = [],
  setCheckList,
  linkId,
}: Props) => {
  return (
    <TagBoxAddContainer type={type}>
      {data.map((item, index) => {
        return (
          <TagAdd
            key={index}
            item={item}
            data={data}
            data2={data2}
            linkId={linkId}
            type={"AddModal"}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        );
      })}
    </TagBoxAddContainer>
  );
};

export default TagBoxAdd;

const TagBoxAddContainer = styled.div<{ type: string }>`
  width: 100%;
  padding-right: ${({ type }) => (type === "view" ? "20" : "0")}px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
