import { useNasaPhoto } from "../../provider/GetImage";
import { Button } from 'grommet';
import { CircleInformation } from "grommet-icons";
import { Figure, Section } from "./styles";

export const ImageCard = () => {
     const { date, title, imageSrc } = useNasaPhoto();

    return (
        <Section>
            <div>
                <span>{date}</span>
                <h2>{title}</h2>
            </div>
            <Figure alt={title} imageSrc={imageSrc}>
                <img alt={title} src={imageSrc}/>
            </Figure>
            <span className="button">
                <Button icon={<CircleInformation size="large" color="plain"/>} hoverIndicator onClick={() => {}} />
            </span>
        </Section>       
    )
}