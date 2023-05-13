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

import axios from "axios";
import { parse } from "node-html-parser";

const getWebsiteTitle = async (url: string) => {
  const response = await axios.get(url);
  const html = response.data;
  const root = parse(html);
  const titleElement = root.querySelector("title");
  return titleElement ? titleElement.innerText : "";
};

const sendData = async (data: LinkType) => {
  const endpoint = "http://43.200.213.0:8000/slack";

  try {
    const response = await axios.post(endpoint, data);
    console.log("Data sent successfully!");
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  func?: (value: LinkType) => void;
};

const MainModal = ({ isOpen, setIsOpen, func = () => {} }: Props) => {
  // 초기값 설정 zustand > localStorage > ""
  const [url, setUrl] = useState("");
  const onChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
  };
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    getUserTagList("mXjlGHOIDkjz7YMuofHU");
  }, []);

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
          p="25px"
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
            placeholder="Paste Link.."
            color="rgba(0, 0, 0, 0.5)"
            fontSize="12px"
            textAlign="left"
            value={url}
            onChange={onChangeUrl}
          />
          <Margin h={24} />
          <TagBox
            data={tagList}
            type="add"
            checkList={checkList}
            setCheckList={setCheckList}
          />
          <Margin h={24} />
          <BtnBox>
            <BtnConfirm
              onClick={() => {
                getWebsiteTitle(url)
                  .then((title) => {
                    func({ url: url, tag: checkList, title: title ?? "" });
                    sendData({ url: url, tag: checkList, title: title ?? "" });
                  })
                  .catch((error) => {
                    const trimmedUrl = url.replace("https://", "");
                    const domain = trimmedUrl.substring(
                      0,
                      trimmedUrl.lastIndexOf(".")
                    );
                    const title2 = domain.split(".").join(".");
                    func({
                      url: url,
                      tag: checkList,
                      title: title2,
                    });
                    sendData({
                      url: url,
                      tag: checkList,
                      title: title2,
                    });
                    setUrl("");
                    setIsOpen(false);
                  });
              }}
            >
              ADD LINK
            </BtnConfirm>
          </BtnBox>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MainModal;

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
