import React from "react";

import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutText,
} from "./About.Styles";

const AboutSection = ({ id, title, classes, bgClr = "var(--saintBlue)" }) => {
  return (
    <AboutContainer id={id} bgClr={bgClr}>
      <AboutContent>
        <AboutTitle className={classes}> {title} </AboutTitle>
        <AboutText>
          Ideal para Colegios, Universidades, Clubes, condominios y muchos mas
          establecimientos u organizaciones con pagos recurrente{" "}
        </AboutText>
        <AboutText>
          La forma rapida, comoda y segura de gestionar tus cobros
        </AboutText>
        <AboutText> con el soporte que solo te puede brindar SAINT</AboutText>
        <AboutText> Integrado con tu sistema de Annual</AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
