import Margin from "@/pages/component/margin";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import goLink from "@/public/data/link";

const SlackBox = () => {
  return (
    <SlackBoxContainer onClick={() => goLink("slack")}>
      <div className="slackDiv">
        <div className="marginImg1">
          <Image
            src="/asset/common/png/btn-slack.png"
            alt=""
            width={190}
            height={110}
          />
        </div>
        <div className="marginImg2">
          <Image
            src="/asset/common/png/btn-arrow.png"
            alt=""
            width={50}
            height={35}
          />
        </div>
      </div>
      <div className="marginImg3">
        <Image
          src="/asset/common/png/img-explain.png"
          alt=""
          width={178}
          height={27}
        />
      </div>
    </SlackBoxContainer>
  );
};

export default SlackBox;

const SlackBoxContainer = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 32px;
  border-radius: 10px;
  background: #ffffff;
  .slackDiv {
    display: flex;
    flex-direction: row;
  }
  .marginImg1 {
    margin-left: 20px;
  }
  .marginImg2 {
    margin-left: 15px;
    margin-top: calc(110px / 2 - 35px / 2);
  }
  .marginImg3 {
    margin-left: 60px;
  }
`;
