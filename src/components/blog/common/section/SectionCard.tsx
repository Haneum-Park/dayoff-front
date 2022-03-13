import React, { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SectionCardWrap = styled.section``;

const SectionCardBg = styled.img``;

type SectionCardProps = {
  id: number;
  title: string;
  content: string;
  source: string;
}

function SectionCard({
  id, title, content, source,
}: SectionCardProps) {
  const navigate = useNavigate();

  const onRedirect = useCallback((postId: number) => {
    navigate(`/blog/post/${postId}`);
  }, []);

  return (
    <SectionCardWrap onClick={() => onRedirect(id)}>
      <SectionCardBg src={source} alt='section-card-background' />
      <h2>{title}</h2>
    </SectionCardWrap>
  );
}

export default memo(SectionCard);
