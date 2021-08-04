import { usePoem } from "../../provider/GetPoem"
import { Container } from "./style";
export const PoemCard = () => {
    const { title, content, poet, error } = usePoem();
    const phrases = content.split("\n")
    return (
        <Container>
           <article>
                <h2>{title}</h2>
                {
                    phrases.map((phrase, index) => (
                        <p key={index}>{phrase}</p>
                    ))
                }
           </article>
           <footer>
               <p><span>Poet</span>, {poet}</p>
            </footer> 
        </Container>
              
    )
}