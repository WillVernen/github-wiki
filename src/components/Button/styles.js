import styled from 'styled-components';

export const ButtonContainer = styled.button`
    min-width: 128px;
    min-height: 54px;
    padding: 0 20px;
    border: 1px solid #7ee787;
    border-radius: 8px;
    background: #7ee787;
    color: #102318;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 150ms ease, border-color 150ms ease;

    &:hover:not(:disabled) {
        background: #9af29f;
        border-color: #9af29f;
    }

    &:focus-visible {
        outline: 3px solid #ffffff;
        outline-offset: 3px;
    }

    &:disabled {
        opacity: 0.65;
        cursor: wait;
    }

    @media (max-width: 520px) {
        width: 100%;
    }
`