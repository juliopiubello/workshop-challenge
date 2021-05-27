import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../../styles/icons';

export const Container = styled.div` // entire Feed
    display: flex;
    flex-direction: column;

    width: min(601px, 100%); // shortest value between 601px and 100% of current window

    @media (min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }
`;

export const Header = styled.div`
    z-index: 2; // header will be fixed on top when page scrolls
    position: sticky;
    top: 0;
    background: var(--primary);

    display: flex;
    align-items: left;

    text-align: left;

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);

    > button { // wraps icon
        padding: 8px;
        border-radius: 50%;

        outline: 0;
        cursor: pointer;

        &:hover {
            background: var(--twitter-dark-hover);
        }

    }
`;

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    fill: var(--twitter);
`;

const iconCSS = css`
    width: 31px;
    height: 31px;

    cursor: pointer;

    fill: var(--gray);

    &:hover, &.active {
        fill: var(--twitter);
    }
`;

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    background: var(--primary);
    width: 100%;
    border-top: 1px solid var(--outline);

    display: flex;
    justify-content: space-between;

    padding: 8px min(46px, max(10vw, 10px));

    @media (min-width: 500px) {
        display: none;
    }
`;

export const HomeIcon = styled(Home)`
    ${iconCSS}
`;

export const SearchIcon = styled(Search)`
    ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
    ${iconCSS}
`;

export const EmailIcon = styled(Email)`
    ${iconCSS}
`;