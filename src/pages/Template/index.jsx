import { StarsBackground } from "../../components/Particles";
import { SolarSystem } from "../../components/SolarSystem";
import { Button } from "grommet";
import { Container, Section, Title, Subtitle } from "./styles";

export const Template = () => {
    return (
        <Container>
            <StarsBackground />       
            <SolarSystem />
            <Section>
                <Title>AstroPoem</Title>
                <Subtitle>your daily dose of astronomy and poetry</Subtitle>
                <Button size="medium" label="show me" hoverIndicator primary/>
            </Section>
        </Container>
    )
}