import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Flex, Input, Space, Text } from "~/@components/atoms";
import { Button } from "~/@components/molecules";

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const lang_list = [
  {
    lang: "ko",
    desc: "한국어",
  },
  {
    lang: "en",
    desc: "English",
  },
  {
    lang: "ch",
    desc: "中文",
  },
];

export default function Home() {
  const { t } = useTranslation("common");
  const [isRendered, setIsRendered] = useState(false);
  const [isLangClicked, setIsLangClicked] = useState(false);
  const [isContinue, setIsContinue] = useState(false);

  // userInfo
  const [userInfo, setUserInfo] = useState({
    name: undefined,
    age: undefined,
    record: undefined,
    color: undefined,
  });

  const handleUserInfo = (e: any) => {
    const targetId = e.target.id;
    const value = e.target.value;

    if (targetId === "name") {
      setUserInfo({ ...userInfo, name: value });
    } else if (targetId === "age") {
      setUserInfo({ ...userInfo, age: value });
    } else if (targetId === "record") {
      setUserInfo({ ...userInfo, record: value });
    } else {
      setUserInfo({ ...userInfo, color: value });
    }
  };

  //purpose

  const purpose_list = ["프로필 사진", "여권", "민증", "운전면허"];

  const [purpose, setPurpose] = useState("");
  const handlePurpose = (e: any) => {
    const target = e.target.id;
    setPurpose(target);
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const [isAllChecked, setIsAllChecked] = useState(false);

  // 분위기

  const mood_list = [
    "담백한",
    "즐거운",
    "상큼한",
    "자연스러운",
    "쾌활한",
    "환한",
    "도시적인",
    "편안한",
    "특별한",
    "강렬한",
    "시원한",
    "서정적인",
    "투명한",
    "건강한",
    "몽환적인",
    "캐주얼한",
    "빈티지한",
    "깔끔한",
    "자유분방한",
    "고급스러운",
    "깨끗한",
    "고운",
  ];
  const [curMood, setMood] = useState<any[]>([]);

  const handleMood = (mood: string) => {
    if (curMood.includes(mood)) {
      setMood(curMood.filter((el) => el !== mood));
    } else if (curMood.length >= 3) {
      return;
    } else {
      setMood([...curMood, mood]);
    }
  };

  const [isLast, setIsLast] = useState(false);

  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (userInfo.name && userInfo.age && userInfo.color && userInfo.record && purpose) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [userInfo, purpose]);

  return (
    <>
      <NextSeo
        title="시현하다 질문지"
        description="시현하다에 방문하는 고객의 정보를 묻기 위한 페이지입니다."
        canonical="https://sihyunform.com"
        openGraph={{
          url: "https://sihyunform.com",
        }}
      />
      <Intro_Animation_1>
        <Intro_Image>
          <Image src={"/logo.svg"} alt="logo" width={328} height={121} />
        </Intro_Image>
      </Intro_Animation_1>

      {isLangClicked ? (
        ""
      ) : (
        <Intro_Animation_2>
          <Flex gap={20}>
            {lang_list.map((el) => (
              <Button
                cursor="pointer"
                key={uuidv4()}
                onClick={() => setIsLangClicked(true)}
                background="lightgray"
                width="100%"
              >
                <Link href={"/"} locale={el.lang}>
                  <Text text={el.desc} cursor="pointer" size={16} />
                </Link>
              </Button>
            ))}
          </Flex>
        </Intro_Animation_2>
      )}

      {isLangClicked ? (
        isContinue ? (
          ""
        ) : (
          <Intro_Animation_3>
            <Text text={t("main_desc")} size={16} align="center" />
            <Space height="100px" />
            <Button cursor="pointer" border="10px" background="lightgray" onClick={() => setIsContinue(true)}>
              <Text cursor="pointer" text={"작성하러 가기"} size={16} />
            </Button>
          </Intro_Animation_3>
        )
      ) : (
        ""
      )}
      {isContinue ? (
        isLast ? (
          ""
        ) : (
          <Intro_Animation_4>
            <Flex align="start" gap={20}>
              <Text text={new Date().toISOString().slice(2, 10).replaceAll("-", " .")} size={20} />
              <Flex direction="row" justify="start" gap={5}>
                <Input type="string" value={userInfo.name} onChange={handleUserInfo} id="name" width="100px" />
                <Text text={"의"} size={20} />
                <Input type="string" value={userInfo.age} onChange={handleUserInfo} id="age" width="50px" />
                <Text text={"살의"} size={20} />
                <Input type="string" value={userInfo.record} onChange={handleUserInfo} id="record" width="30px" />
                <Text text={"번째 기록"} size={20} />
              </Flex>
              <Flex direction="row" justify="start" gap={30}>
                <Text text={"나의 색"} size={20} />
                <Input type="text" value={userInfo.color} width="200px" onChange={handleUserInfo} id="color" />
              </Flex>
              <Flex align="start" gap={10}>
                <Text text={"사진용도"} size={20} />
                <Flex direction="row" justify="start" gap={10} wrap="wrap">
                  {purpose_list.map((el) => (
                    <Button
                      key={uuidv4()}
                      background={purpose === el ? "lightblue" : "lightgray"}
                      borderRadius="10px"
                      padding="5px 20px"
                      cursor={"pointer"}
                      id={el}
                      onClick={handlePurpose}
                    >
                      <Text size={20} text={el} id={el} cursor={"pointer"} />
                    </Button>
                  ))}
                </Flex>
              </Flex>
            </Flex>
            <Space height="50px" />
            <Flex direction="row" justify="end" gap={30}>
              <Text text={"기록가"} size={20} />
              <Input type="button" value={"누구누구"} width="200px" pointer="none" />
            </Flex>
            <Space height="50px" />

            <Flex direction="row" justify="center" gap={30}>
              <Button
                background={isAllChecked ? "black" : "lightgray"}
                borderRadius="10px"
                padding="15px 20px"
                width="100%"
                cursor={isAllChecked ? "pointer" : "none"}
                pointer={isAllChecked ? "auto" : "none"}
                onClick={() => {
                  setIsLast(true);
                }}
              >
                <Text size={20} text={"다음"} color="white" cursor={isAllChecked ? "pointer" : "none"} />
              </Button>
            </Flex>
          </Intro_Animation_4>
        )
      ) : (
        ""
      )}
      {isLast ? (
        isFinished ? (
          ""
        ) : (
          <Intro_Animation_5>
            <Flex align="start">
              <Text text="오늘 내가 표현하고자 하는" size={20} />
              <Space height="5px" />
              <Text text="분위기는 무엇인가요?" size={20} />
              <Space height="5px" />
              <Text text="가장 마음에 드는 3가지를 골라주세요" size={20} />
            </Flex>
            <Space height="50px" />
            <Flex direction="row" justify="start" gap={20} wrap="wrap">
              {mood_list.map((el) => (
                <Button
                  key={uuidv4()}
                  padding="3px 10px"
                  background={curMood.includes(el) ? "lightblue" : "lightgray"}
                  border="10px"
                  onClick={() => handleMood(el)}
                  cursor="pointer"
                >
                  <Text text={el} size={20} cursor="pointer" />
                </Button>
              ))}
            </Flex>
            <Space height="50px" />
            <Button
              border="10px"
              background={curMood.length === 3 ? "lightblue" : "lightgray"}
              width="100%"
              pointer={curMood.length === 0 ? "none" : "auto"}
              cursor={curMood.length === 0 ? "none" : "pointer"}
              onClick={() => setIsFinished(true)}
            >
              <Text text={"다음"} size={20} cursor={curMood.length === 0 ? "none" : "pointer"} />
            </Button>
          </Intro_Animation_5>
        )
      ) : (
        ""
      )}
      {isFinished ? (
        <Intro_Animation_6>
          <Flex>
            <Space height="50px" />
            <Text text={"제출해주셔서 감사합니다 :)"} size={20} height={140} />
            <Text text={"조금만 기다려주시면"} size={20} height={140} />
            <Text text={"정성껏 확인하여 멋있는 사진 찍어드리겠습니다"} size={20} height={140} />
          </Flex>
        </Intro_Animation_6>
      ) : (
        ""
      )}
    </>
  );
}

const UpToTop = keyframes` /* 2. css코드를 씀. */
0%{
    transform: translateY(30vh);
}
100%{
    transform: translateY(0px);
}
`;

const FadeIn = keyframes`
  0% {
    opacity : 0;
  } 
  100% {
    opacity : 1;
  }
`;

const Intro_Image = styled.div`
  display: flex;
  justify-content: center;
  animation: ${FadeIn} 1s linear forwards;
`;

const Intro_Animation_1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  transform: translateY(30vh);
  animation: 1s ${UpToTop} 1s ease-out forwards;
`;

const Intro_Animation_2 = styled.div`
  margin-top: 40px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 1s ${FadeIn} 2s ease-out forwards;
`;

const Intro_Animation_3 = styled.div`
  margin-top: 40px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 1s ${FadeIn} 300ms ease-out forwards;
`;

const Intro_Animation_4 = styled.div`
  margin-top: 40px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 1s ${FadeIn} 300ms ease-out forwards;
`;

const Intro_Animation_5 = styled.div`
  margin-top: 40px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 1s ${FadeIn} 300ms ease-out forwards;
`;

const Intro_Animation_6 = styled.div`
  margin-top: 40px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 1s ${FadeIn} 300ms ease-out forwards;
`;
