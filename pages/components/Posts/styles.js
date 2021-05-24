import styled from 'styled-components';

export const WrapperPosts = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%); // shortest value between 601px and 100% of current window

  @media (min-width: 500px) {
      border-left: 1px solid var(--outline);
      border-right: 1px solid var(--outline);
  }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0; /* this element will not shrink */
`;

export const Post = styled.div`
  width: 100%;
  border-bottom: 1px solid #dedede;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }

`;

export const Text = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;
