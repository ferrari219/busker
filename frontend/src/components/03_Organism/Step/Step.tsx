import StepUl from "src/components/02_Molecules/StepUl";
import StepLi from "src/components/01_Atom/StepLi/StepLi";
import React, { useState } from "react";

const content = [
  { id: 1, tab: "Section 1", content: "I am the content of the Section 1" },
  { id: 2, tab: "Section 2", content: "I am the content of the Section 2" },
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
            // className={currentItem.id === index ? 'is-active' : ''}
            step={item.id}
            label={item.tab}
            onClick={() => changeItem(index)}
          />
        ))}
        {/* <StepLi step={1} label="스토어 등록" />
        <StepLi step={2} label="위치 등록" active={true} />
        <StepLi step={3} label="메뉴 등록" />
        <StepLi step={4} label="상세정보" />
        <StepLi step={5} label="스토어 생성 완료" /> */}
      </StepUl>
      <div>{currentItem.content}</div>
    </section>
  );
};

export default Step;
