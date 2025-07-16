import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2vw;
    height: 100vh;
    display: flex;
    gap: 2vw;

    @media (min-width: 300px) and (max-width: 1300px) {
        height: 100vh;
        flex-direction: column;
    }
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;    
`;