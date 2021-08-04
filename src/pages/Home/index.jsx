import { ImageCard } from "../../components/ImageCard";
import { Container, Title } from "./styles";
import { PoemCard } from "../../components/PoemCard";
import { useModal } from '../../provider/Modal';
import { Modal } from "../../components/Modal";
import { grommet } from 'grommet/themes';
import { Grommet } from "grommet";
export const Home = () => {
    const { showModal } = useModal();
    console.log(showModal)
    return (
        <Grommet options={{ layer: { singleId: true } }}  full>
            { showModal && <Modal />}
        <main>
            
            <Title>AstroPoem</Title>
            <Container>
                <ImageCard />
                <PoemCard />
            </Container>
        </main>
        </Grommet>
    )
}