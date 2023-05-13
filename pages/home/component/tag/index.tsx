import { CloseIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  item: string;
};

const Tag = ({ item }: Props) => {
  return (
    <TagContainer>
      {"#" + item}
      <CloseIcon w="5px" h="5px" mt="5px" ml="8px" />
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div`
  padding: 2px 6px 2px 6px;
  margin-right: 8px;
  margin-bottom: 4px;
  background: #e8ecf9;

  display: flex;
  flex-direction: row;

  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  border-radius: 4px;
`;
