import styled, { css } from 'styled-components';

import { Chat, Twitter, Favorite } from '../../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);

    max-width: 100%;
`;
    
export const Body = styled.div`
    display: flex;
    margin-top: 3px;
    
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
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

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%; /* mobile */

    @media (min-width: 330px) {
        width: 63%; /* tablet+ */
    }

    > div {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        &, > svg path {
            color: var(--gray);
        }
    }

    &:nth-child(2) {
        color: var(--retweet);

        &, > svg path {
            fill: var(--retweet);
        }
    }

    &:nth-child(3) {
        color: var(--like);

        &, > svg {
            fill: var(--like);
        }
    }
`;

const iconCSS = css`
    width: 19px;
    height: 19px;
`;

export const CommentIcon = styled(Chat)`
    ${iconCSS}
`;

export const RetweetIcon = styled(Twitter)`
    ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
    ${iconCSS}
`;
