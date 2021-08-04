import styled from "styled-components";

export const Container = styled.section`
    @media (min-width: 768px){
        width: 30%;
        max-height: 100%;
        border: 3px solid var(--dark-red);
        padding: 1rem;
    }
    background-color: var(--white);
    padding: 0.8rem;
    border-radius: 1rem;
    /* min-height: 40vh; */
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
    border: 1px solid var(--dark-red);

    h2 {
        text-align: center;
        font-family: var(--font-title);
        letter-spacing: 1.5px;
        color: var(--title-color);
        margin-bottom: 1rem;
    }

    article {
        text-align: center;
        overflow: auto;
        max-height: 80%;
        p {
            font-family: var(--font-text);
            color: var(--content-color)
        }
    }

    footer {
        margin-top: 1rem;
        font-family: var(--font-text);
        font-weight: 500;
        p{
            color: var(--title-color);
            font-weight: 700;
            span {
                font-weight: 600;
                color: var(--subtitle-color);
            }
        }
    }
`
