import { Button } from "../../Button"
import {
    Container,
    LeftContainer,
    RightContainer,
    Section,
} from "./InfoSection.Styles"

const InfoSection = ({infoData, id }) => {

    return (
        <Section id={id} >
            <Container>
                <LeftContainer position={infoData.imagePosition}>
                    <h1> {infoData.heading} </h1>
                    <p> {infoData.paragraph1} </p>
                    <p> {infoData.paragraph2} </p>
                    <Button to="/detail" primary="true"> {infoData.buttonLabel}</Button>
                </LeftContainer>
                <RightContainer >
                    <img src={infoData.image} alt=""/>
                </RightContainer>
            </Container>
        </Section>
    )
}

export default InfoSection
