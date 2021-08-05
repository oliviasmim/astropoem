import { StarsBackground } from "../../components/Particles";
import { SolarSystem } from "../../components/SolarSystem";
import { Button } from "grommet";
import { Container, Section, Title, Subtitle } from "./styles";
import { useGoHome } from "../../provider/GoHome";
import { motion } from "framer-motion";

export const Template = () => {
    const { handleButtonGoHome } = useGoHome();
        
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
        <Container>
            <StarsBackground />       
            <SolarSystem />

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <Section>
                    <Title>AstroPoem</Title>
                    <Subtitle>your daily dose of astronomy and poetry</Subtitle>
                    <Button onClick={handleButtonGoHome} size="medium" label="show me" hoverIndicator primary/>
                </Section>
            </motion.div>
        </Container>
        </motion.div>
    )
}