import styled from "@emotion/styled";
import React from "react";
import List from "../list";
import { LinkType } from "@/firebase/type/link";

type Props = {
  data: LinkType[];
};

const LinkListBox = ({ data = [] }: Props) => {
  return (
    <LinkListBoxContainer>
      {data.map((item, index) => {
        return <List key={index} item={item} />;
      })}
    </LinkListBoxContainer>
  );
};

export default LinkListBox;

const LinkListBoxContainer = styled.div``;
