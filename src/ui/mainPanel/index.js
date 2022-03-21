import styled from 'styled-components';

const PanelFrame = styled.div`
    border: 1px solid #ECEFF1;
    border-radius: 10px;
    box-shadow: 2px 3px 6px #D7CCC8;
    height: calc(100% - 320.73px);
    margin-top: 40px;
`
const TopFramePanel = styled.div`
    padding: 20px;
    border-bottom: 1px solid #ECEFF1;
`

const CenterFramePanel = styled.div`
    padding: 20px;
    border-bottom: 1px solid #eceff1;
    min-height: 500px;
    height: calc(100vh - 460px);
`;

const BottomFramePanel = styled.div`
    padding: 35px 0;
`

export { PanelFrame, TopFramePanel, CenterFramePanel, BottomFramePanel}