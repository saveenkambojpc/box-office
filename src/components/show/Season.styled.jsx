import styled from 'styled-components';

export const SeasonsWrapper = styled.div`
  overflow-x:scroll;

  ::-webkit-scrollbar {
    display: none;
}

`;

export const SeasonList = styled.div`
display:inline;
white-space: nowrap;
  
  .season-item {
    margin:10px;
    display:inline-block;
    position:relative;
    width:160px;
    min-width:160px;
    max-width:160px;
    overflow:hidden;
    border-radius:10px;
    background:yellow;

    img{
      min-width:100%;
      max-width:100%;
      min-height:228.76px;
    }

    &>.absolute{
      display:flex;
      width:100%;
      height:100%;
      color:white;
      padding:10px;
      position:absolute;
      top:0;
   
      flex-direction:column;
      justify-content:flex-end;
      z-index:1;

      background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(25,146,45,0) 0%, rgba(0,72,86,1) 100%);
    }
  }
`;
