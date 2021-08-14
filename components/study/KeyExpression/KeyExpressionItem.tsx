import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ellipsisText } from 'lib/mixin';
import React from 'react';

import FavoriteButton from './FavoriteButton';

interface Props {
  id: number;
  songId?: number;
  type: 'line-top' | 'line-left';
  width: string;
  eng: string;
  engExample: string;
  kor: string;
  korExample: string;
  style?: { [key: string]: string };
  isSaved: boolean;
}

function KeyExpressionItem({
  id,
  songId,
  type,
  width,
  eng,
  engExample,
  kor,
  korExample,
  style,
  isSaved,
}: Props) {
  return (
    <Styled.Root width={width} style={{ ...style }}>
      <Styled.KeywordWrapper type={type}>
        <Styled.KorKeyword>{kor}</Styled.KorKeyword>
        <Styled.EngKeyword>{eng}</Styled.EngKeyword>
      </Styled.KeywordWrapper>
      <Styled.ExampleWrapper>
        <Styled.KorExample>{korExample}</Styled.KorExample>
        <Styled.EngExample>{engExample}</Styled.EngExample>
      </Styled.ExampleWrapper>
      <Styled.Line type={type} />
      <FavoriteButton type={type} isSaved={isSaved} id={id} songId={songId} />
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

  KeywordWrapper: styled.div<{ type: 'line-top' | 'line-left' }>`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    margin: 16px 16px 16px 24px;
    border-bottom: 1px solid #e1e1e1;
    height: 72px;
    ${({ type }) => (type === 'line-top' ? 'height: 72px;' : 'height: 64px;')}
  `,

  KorKeyword: styled.h4`
    margin-right: 10%;
    margin-bottom: 6px;
    min-width: 72px;
    color: #202020;
    font-size: 20px;
    font-weight: 500;
    ${ellipsisText}
  `,

  EngKeyword: styled.h5`
    margin-bottom: 6px;
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
