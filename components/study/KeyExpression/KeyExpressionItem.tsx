import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { client } from 'lib/api';
import { ellipsisText } from 'lib/mixin';
import React from 'react';

import FavoriteButton from './FavoriteButton';

interface Props {
  id: number;
  type: 'line-top' | 'line-left';
  width: string;
  eng: string;
  engExample: string;
  kor: string;
  korExample: string;
  style?: { [key: string]: string };
  myvocab: boolean;
}

function KeyExpressionItem({
  id,
  type,
  width,
  eng,
  engExample,
  kor,
  korExample,
  style,
  myvocab,
}: Props) {
  const deleteFavorite = (id: number) => {
    client
      .delete(`/user/vocab/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addFavorite = (id: number) => {
    client
      .post(`/user/vocab/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Styled.Root width={width} style={{ ...style }}>
      <Styled.KeywordWrapper>
        <Styled.KorKeyword>{kor}</Styled.KorKeyword>
        <Styled.EngKeyword>{eng}</Styled.EngKeyword>
      </Styled.KeywordWrapper>
      <Styled.ExampleWrapper>
        <Styled.KorExample>{korExample}</Styled.KorExample>
        <Styled.EngExample>{engExample}</Styled.EngExample>
      </Styled.ExampleWrapper>
      <Styled.Line type={type} />
      <FavoriteButton myvocab={myvocab} deleteFavorite={deleteFavorite} id={id} />
    </Styled.Root>
  );
}

export default KeyExpressionItem;

const Styled = {
  Root: styled.div<{ width: string }>`
    position: relative;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    background-color: #fff;
    width: ${({ width }) => width};
  `,

  Line: styled.div<{ type: 'line-top' | 'line-left' }>`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #6465f4;

    ${({ type }) =>
      type === 'line-left'
        ? css`
            border-radius: 8px 0 0 8px;
            width: 8px;
            height: 100%;
          `
        : css`
            border-radius: 8px 8px 0 0;
            width: 100%;
            height: 8px;
          `}
  `,

  KeywordWrapper: styled.div`
    display: flex;
    align-items: center;
    margin: 0 16px 0 24px;
    border-bottom: 1px solid #e1e1e1;
    height: 64px;
  `,

  KorKeyword: styled.h4`
    margin-right: 10%;
    min-width: 72px;
    color: #202020;
    font-size: 20px;
    font-weight: 500;
    ${ellipsisText}
  `,

  EngKeyword: styled.h5`
    max-width: 120px;
    line-height: 1.2;
    color: #9d9d9d;
    font-size: 14px;
    font-weight: 500;
    ${ellipsisText}
  `,

  ExampleWrapper: styled.div`
    margin: 16px 16px 16px 24px;
  `,

  KorExample: styled.h5`
    margin-bottom: 6px;
    line-height: 1.4;
    color: #202020;
    font-size: 12px;
    font-weight: 500;
  `,

  EngExample: styled.h5`
    line-height: 1.4;
    color: #9d9d9d;
    font-size: 12px;
    font-weight: 500;
  `,
};
