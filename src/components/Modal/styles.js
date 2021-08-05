import styled from "styled-components";

export const Section = styled.section`
    button {
        position: absolute;
        right: 0;
        top: 0;
    }

    article {
        overflow: auto;
        
        h2 {
        font-family: var(--font-title);
        margin-bottom: 0.5rem;
        padding-right: 2rem;
        }

        p {
            font-family: var(--font-text);
            color: var(--content-color)
        }
    }
`