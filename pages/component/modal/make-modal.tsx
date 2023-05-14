import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import TagBox from "@/pages/home/component/box/tag-box";
import { UserCollection } from "@/firebase/collection/user";
import Margin from "../margin";
import { LinkType } from "@/firebase/type/link";
import TagBoxAdd from "@/pages/home/component/box/tag-box-add";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MakeModal = ({ isOpen, setIsOpen }: Props) => {
  const [tagName, setTagName] = useState("");
  const onChangeTagName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagName(event.currentTarget.value);
  };

  const makeTag = async (userId: string) => {
    const userData = await UserCollection.readUser(userId);
    const tagList = userData ? userData.tagList : [];
    UserCollection.updateUserTagList(userId, [...tagList, tagName]);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <ModalOverlay />
        <ModalContent
          w="240px"
          p="25px 25px 17px 25px"
          mt="calc(var(--vh, 1vh) * 50 - 330px/2)"
          ml="0px"
          position="relative"
          background="#ECEFFC"
          borderRadius="10px"
          border="0px"
        >
          <Input
            mt="10px"
            p="2px 8px"
            background="white"
            borderColor="white"
            focusBorderColor="white"
            fill="white"
            placeholder="Tag Name.."
            color="rgba(0, 0, 0, 0.5)"
            fontSize="12px"
            textAlign="left"
            value={tagName}
            onChange={onChangeTagName}
          />
          <Margin h={24} />
          <BtnBox>
            <BtnConfirm
              onClick={() => {
                makeTag("mXjlGHOIDkjz7YMuofHU");
                setIsOpen(false);
                window.location.reload();
              }}
            >
              Make Tag
            </BtnConfirm>
          </BtnBox>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MakeModal;

const BtnBox = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;

const BtnConfirm = styled.button`
  width: 100%;
  height: 32px;
  background: #de0a0a;
  border: 1px solid white;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: white;
`;
