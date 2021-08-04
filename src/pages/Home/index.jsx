import { ImageCard } from "../../components/ImageCard";
import { Container, Title } from "./styles";
import { PoemCard } from "../../components/PoemCard";

export const Home = () => {
    return (
    
        <main>
            <Title>AstroPoem</Title>
            <Container>
                <ImageCard />
                <PoemCard />
            </Container>
        </main>
    )
}