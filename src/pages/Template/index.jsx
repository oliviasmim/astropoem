import { StarsBackground } from "../../components/Particles";
import { SolarSystem } from "../../components/SolarSystem";
import { Button } from "grommet";
import { Container, Section, Title, Subtitle } from "./styles";
import { useGoHome } from "../../provider/GoHome";

export const Template = () => {
    const { handleButtonGoHome } = useGoHome();

    return (
        <Container>
            <StarsBackground />       
            <SolarSystem />
            <Section>
                <Title>AstroPoem</Title>
                <Subtitle>your daily dose of astronomy and poetry</Subtitle>
                <Button onClick={handleButtonGoHome} size="medium" label="show me" hoverIndicator primary/>
            </Section>
        </Container>
    )
}