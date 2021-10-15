import StepUl from "src/components/02_Molecules/StepUl";
import StepLi from "src/components/01_Atom/StepLi/StepLi";
import StepCont from "src/components/02_Molecules/StepCont";
import React, { useState } from "react";
import Image from "next/image";
import ImgHam from "src/assets/img/sample_burger.jpg";
import Input from "src/components/01_Atom/Input";
import Button from "src/components/01_Atom/Button";
import ButtonWrap from "src/components/02_Molecules/ButtonWrap";

const content = [
  {
    id: 1,
    tab: "스토어등록",
    content: (
      <>
        <h3>생성할 스토어 대표사진과 이름을 입력해주세요</h3>
        <div>
          <Image src={ImgHam} width="890" height="670" alt="대표사진" />
          <p>
            <Input
              value="뉴욕 수제버거"
              placeholder="스토어 이름"
              width="100%"
            />
          </p>
          <ButtonWrap>
            <Button type="outline" size="lg">
              이전
            </Button>
            <Button type="solid" size="lg">
              다음
            </Button>
          </ButtonWrap>
        </div>
      </>
    ),
  },
  {
    id: 2,
    tab: "위치 등록",
    content: (
      <>
        <h3>스토어 위치를 맵에서 선택해주세요.</h3>
        <div>
          <Image src={ImgHam} width="890" height="670" alt="대표사진" />
          <p>
            <Input
              value="뉴욕시 도봉구 강남대로566"
              placeholder="스토어 위치"
              width="100%"
            />
          </p>
          <ButtonWrap>
            <Button type="outline" size="lg">
              이전
            </Button>
            <Button type="solid" size="lg">
              다음
            </Button>
          </ButtonWrap>
        </div>
      </>
    ),
    // {
    //   h3: "스토어 위치를 맵에서 선택해주세요.",
    //   img: ImgHam,
    //   imgAlt: "뉴욕시 도봉구 강남대로566",
    // },
  },
  // {
  //   id: 3,
  //   tab: "메뉴 등록",
  //   content: {
  //     h3: "스토어 메뉴, 가격을 입력해주세요.",
  //   },
  // },
  // {
  //   id: 4,
  //   tab: "상세정보",
  //   content: {
  //     h3: "스토어에 대한 상세정보를 입력해주세요.",
  //   },
  // },
  // {
  //   id: 5,
  //   tab: "스토어 생성 완료",
  //   content: {
  //     h3: "스토어 생성이 완료되었습니다.",
  //     img: ImgHam,
  //     imgAlt: "뉴욕 정통 수제버거",
  //   },
  // },
];

const useTabs = (
  initialTab: number,
  allTabs: Array<{
    id: number;
    tab: string;
    content: React.ReactNode;
  }>,
) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab); // 전체탭의 [0]번째로 노출해야함
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex, // changeItem은 함수 = setCurrentIndex
  };
};

const Step = ({}) => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <section>
      <StepUl>
        {content.map((item, index) => (
          <StepLi
            key={item.id}
            step={item.id}
            label={item.tab}
            active={currentItem.id - 1 === index ? true : false}
            onClick={() => {
              changeItem(index);
            }}
          />
        ))}
        {/* <StepLi step={1} label="스토어 등록" />
        <StepLi step={2} label="위치 등록" active={true} />
        <StepLi step={3} label="메뉴 등록" />
        <StepLi step={4} label="상세정보" />
        <StepLi step={5} label="스토어 생성 완료" /> */}
      </StepUl>
      <StepCont>{currentItem.content}</StepCont>
    </section>
  );
};

export default Step;
