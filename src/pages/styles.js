import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 32px 24px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

`;

export const SearchForm = styled.form`
    width: min(100%, 760px);
    display: flex;
    align-items: flex-end;
    gap: 12px;
    margin: 24px 0 16px;

    label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    @media (max-width: 520px) {
        align-items: stretch;
        flex-direction: column;
    }
`;

export const Feedback = styled.p`
    width: min(100%, 760px);
    box-sizing: border-box;
    margin: 8px 0;
    color: ${props => props.$isError ? '#ff8a80' : '#b7c4ce'};
`