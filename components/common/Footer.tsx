import styled from '@emotion/styled';
import React from 'react';

function Footer() {
  return (
    <Styled.Root>
      <Styled.Left>
        <button />
        <div>
          <Styled.Email>
            <img src="/assets/icons/emailIcon.svg" alt="" />
            <span>woorimal.zip@gmail.com</span>
          </Styled.Email>
          <Styled.Github>
            <img src="/assets/icons/githubIcon.svg" alt="" />
            <span>https://github.com/Kyrics</span>
          </Styled.Github>
          <Styled.Copyright>Copyright &#169; 2021. Kyrics. All rights reserved.</Styled.Copyright>
        </div>
      </Styled.Left>
      <Styled.Right>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">기획</div>
          <div className="line"></div>
        </div>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">디자인</div>
          <div className="line"></div>
        </div>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">웹</div>
          <div className="line"></div>
        </div>
        <div className="firstRow">
          <div className="line"></div>
          <div className="part">서버</div>
          <div className="line"></div>
        </div>
        <div>김동규</div>
        <div>최혜린</div>
        <div>이정연&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;김의진</div>
        <div>윤가영&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;성청하</div>
        <div>오정은</div>
        <div>노유정</div>
        <div>박나희&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이다은</div>
        <div>
          <span>
            김서현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <img src="/assets/icons/kyricsGrayLogo.svg" alt=""></img>
        </div>
      </Styled.Right>
    </Styled.Root>
  );
}

export default Footer;

const Styled = {
  Root: styled.div`
    display: flex;
    background-color: #f6f6f6;
    padding-bottom: 70px;
    color: #9d9d9d;
    @media (max-width: 768px) {
      padding-bottom: 43px;
    }
  `,
  Left: styled.div`
    flex-basis: 40%;
    margin-left: 140px;
    font-size: 14px;
    & > button {
      margin-top: 32px;
      margin-bottom: 80px;
      border: none;
      background: url(/assets/icons/kyricsGrayName.svg) no-repeat;
      cursor: pointer;
      padding: 0;
      width: 150px;
      height: 30px;
      @media (max-width: 768px) {
        margin-bottom: 46px;
        background-image: url(/assets/icons/kyricsSmallGrayName.svg);
        width: 91px;
        height: 14px;
      }
    }
    @media (max-width: 768px) {
      margin-left: 20px;
      font-size: 12px;
    }
  `,
  Email: styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    white-space: nowrap;
    & > img {
      margin-right: 4px;
    }
  `,
  Github: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    height: 24px;
    white-space: nowrap;
    & > img {
      margin-right: 4px;
    }
  `,
  Copyright: styled.div`
    white-space: nowrap;
    font-size: 12px;
  `,
  Right: styled.div`
    display: grid;
    flex-basis: 60%;
    grid-template-rows: repeat(3, 45px);
    grid-template-columns: repeat(4, 1fr);
    margin-top: 90px;
    margin-right: 70px;
    .line {
      border-top: 1px solid #9d9d9d;
      width: 15px;
    }
    .part {
      margin: 0 6px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .firstRow {
      margin-bottom: 32px;
    }
    img {
      margin-right: 12px;
    }
    @media (max-width: 1100px) {
      display: none;
      flex-basis: 1;
    }
  `,
};
