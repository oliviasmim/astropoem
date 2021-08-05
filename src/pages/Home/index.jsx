import { ImageCard } from "../../components/ImageCard";
import { Container, Title } from "./styles";
import { PoemCard } from "../../components/PoemCard";
import { useModal } from '../../provider/Modal';
import { Modal } from "../../components/Modal";
import { Grommet } from "grommet";
import { motion } from "framer-motion";

export const Home = () => {
    const { showModal } = useModal();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
        >
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
        </motion.div>
    )
}