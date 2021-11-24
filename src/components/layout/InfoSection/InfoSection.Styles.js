import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0;
`;

export const Container = styled.div`
    padding: 3rem calc((100vw - 1300px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 300px;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: ${(props) => props.position ? 3 : 1};

    h1 {
        font-size: clamp(1.5rem, 10vw, 2rem);
        margin-bottom: 1rem;
        text-align: center
    }
    p {
        font-size: clamp(1rem, 10vw, 1.5rem);
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        order: 0;
    }
`;

export const RightContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    order: 2;

    img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;