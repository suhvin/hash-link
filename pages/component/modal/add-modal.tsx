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
  data: string[];
  linkId?: string;
};

const AddModal = ({ isOpen, setIsOpen, data, linkId }: Props) => {
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    getUserTagList("mXjlGHOIDkjz7YMuofHU");
  }, [isOpen, data, linkId]);

  const getUserTagList = async (userId: string) => {
    const userData = await UserCollection.readUser(userId);
    setTagList(userData ? userData.tagList : []);
  };

  const [checkList, setCheckList] = useState<string[]>([]);

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
          <TagBoxAdd
            data={tagList}
            data2={data}
            linkId={linkId}
            type="AddModal"
            checkList={checkList}
            setCheckList={setCheckList}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddModal;

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
