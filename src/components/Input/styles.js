import styled from 'styled-components';

export const InputContainer = styled.div`
    flex: 1;
    min-width: 0;
    border: 1px solid #68737d;
    border-radius: 8px;
    background: #1b2026;
    transition: border-color 150ms ease, box-shadow 150ms ease;

    &:focus-within {
        border-color: #7ee787;
        box-shadow: 0 0 0 3px #7ee78730;
    }

    input {
        box-sizing: border-box;
        background: transparent;
        border: 0;
        outline: 0;
        width: 100%;
        min-height: 54px;
        padding: 0 16px;
        color: #ffffff;
        font-size: 16px;

        &::placeholder {
            color: #8b949e;
        }

        &:disabled {
            cursor: wait;
        }
    }
`