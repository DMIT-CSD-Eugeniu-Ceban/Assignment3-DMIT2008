//import { style } from '@mui/system';
import styled from 'styled-components';

const PanelColor = styled.div`
    background-color: ${props => props.bgcolor || "#EFEBE9"};
    z-index: -1;
    width: calc(100% - 193.59px);
    padding: 2rem 2rem;
`
const PanelNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
`


const PanelRootFolder = styled.span`
    display:flex;
    align-items:center;
`

export { PanelColor, PanelNavbar, PanelRootFolder}