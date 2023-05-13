import styled from "@emotion/styled";
import React from "react";
import Tag from "../tag";

type Props = {
  data: string[];
};

const TagBox = ({ data }: Props) => {
  return (
    <TagBoxContainer>
      {data.map((item, index) => {
        return <Tag key={index} item={item} />;
      })}
    </TagBoxContainer>
  );
};

export default TagBox;

const TagBoxContainer = styled.div`
  width: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
