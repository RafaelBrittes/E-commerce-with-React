import styled from 'styled-components'

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 420px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
`