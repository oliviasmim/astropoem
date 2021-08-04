import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    max-height: 100vh;
`

export const Section = styled.section`
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90vw;

    button {
        @media (min-width: 768px){
            padding: 0.5rem 1.8rem;
            border-radius: 20px;
        }
        font-family: var(--font-text);
        color: var(--white);
        background-color: #a32924; 
        border: 1px solid var(--white);
        font-weight: 700;
        margin: 1rem;

     &:hover {
        color: var(--white);
        border: 1px solid var(--red);
        background-color: #681411;
      }
    }
`

export const Title = styled.h1`
@media (min-width: 768px){
    font-size: 5rem;
    text-shadow: 2px 5px 3px #740a07;
}
    font-family: var(--font-title);
    color: var(--white);
    font-size: 3rem;
    text-shadow: 2px 3px 1px #740a07;
`

export const Subtitle = styled.h2`
@media (max-width: 768px){
    font-size: 1rem;
}
    font-family: var(--font-text);
    color: var(--white);
    text-shadow: 2px 2px  var(--dark-blue);
    
`