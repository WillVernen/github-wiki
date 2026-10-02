import styled from "styled-components";

export const ItemContainer = styled.div`
    width: min(100%, 760px);
    box-sizing: border-box;
    padding: 20px 0;

    h3 {
        font-size: 24px;
        color: #f0f6fc;
    }

    p {
        font-size: 16px;
        color: #8b949e;
        margin: 6px 0 16px;
    }

    a {
        color: #79c0ff;
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
    }

    button.remover {
        margin-left: 16px;
        color: #ff8a80;
        background: none;
        border: 0;
        padding: 0;
        font: inherit;
        cursor: pointer;
    }

    a:focus-visible,
    button.remover:focus-visible {
        outline: 2px solid #7ee787;
        outline-offset: 3px;
    }

    hr {
        border: 0;
        border-top: 1px solid #30363d;
        margin: 20px 0 0;
    }
`