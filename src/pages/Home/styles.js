import styled from "styled-components";

export const Container = styled.section`
    @media (max-width: 768px){
    flex-direction: column

    }
    width: 95vw;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    
    section {
        margin-bottom: 2rem;
    }
`

export const Title = styled.h1`
@media (min-width: 768px){
    font-size: 2rem;
    text-shadow: 2px 5px 3px #740a07;
}
    font-family: var(--font-title);
    color: var(--white);
    font-size: 1rem;
    text-shadow: 2px 3px 1px #740a07;  
    margin: 1rem 2rem;
`