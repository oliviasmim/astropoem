import styled from "styled-components";

export const Figure = styled.figure`
    overflow: auto;
    height: 85%;
    width: 100%;
    border-radius: 1rem;
    margin-top: 1rem;

    img {
        width: 100%;
        border-radius: 1rem;
    }
`

export const Section = styled.section`
    @media (min-width: 768px){
        width: 65%;
        height: 80vh;
        border: 3px solid var(--dark-red);
        padding: 1rem;
    }
    background-color: var(--white);
    padding: 0.8rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
    border: 1px solid var(--dark-red);

    span {
        font-family: var(--font-text);
        color: var(--subtitle-color);
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    button {
        position: relative;
        right: 0;
        background-color:  var(--white);
        opacity: .85;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }
    

    h2 {
        font-family: var(--font-title);
        font-size: 1.5rem;
        color: var(--title-color);
    }

    

    button {
        padding: 0px;
        margin: 0;
        background-color: none;

    }

`