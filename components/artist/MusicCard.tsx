import styled from '@emotion/styled';
import router from 'next/router';
import React, { ReactElement, useState } from 'react';

interface Props {
  title: string;
  artist: string[];
  albumImg: string;
  songId: number;
}

function MusicCard({ title, artist, albumImg, songId }: Props): ReactElement {
  const [isHover, setIsHover] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  function handleOnClick() {
    router.push(`/study/${songId}`);
  }

  return (
    <Styled.Root
      isHovered={isHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <img className="img" src={albumImg} alt=""></img>
      <div className="hover">
        <p className="hover__label">Explore &gt;</p>
        <img className="hover__play" src="/assets/icons/playBtn.svg" alt=""></img>
      </div>
      <p className="songTitle">{title}</p>
      <p className="artists">{artist.map((artist) => artist)}</p>
    </Styled.Root>
  );
}
const Styled = {
  Root: styled.button<{ isHovered: boolean }>`
    position: relative;
    border: none;
    background: white;
    cursor: pointer;
    padding: 0;
    width: 200px;
    height: 275px;

    .img {
      border-radius: 10px;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    .hover {
      display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};
      position: absolute;
      top: 0px;
      border-radius: 10px;
      background: linear-gradient(
        158.98deg,
        rgba(231, 78, 151, 0.6) 3.15%,
        rgba(100, 101, 244, 0.6) 94.3%
      );
      width: 200px;
      height: 200px;

      &__label {
        padding-top: 65px;
        text-align: center;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        line-height: 30px;
        color: #ffffff;
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
      }

      &__play {
        padding-top: 20px;
      }
    }

    .songTitle {
      margin-top: 17px;
      text-align: center;
      color: #464646;
      font-size: 24px;
      font-weight: bold;
      font-style: normal;
    }

    .artists {
      margin-top: 7px;
      text-align: center;
      color: #9d9d9d;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
    }
  `,
};

export default MusicCard;
