// CSS for ShowCard and ShowGrid ---
import styled from "styled-components";

export const FlexGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const Card = styled.div`
margin:10px;
border-radius:10px; 
transition:400ms;
transition-delay:200ms;
position:relative;
width:150px;

overflow-y:hidden;
overflow-x:hidden;


button{
    background:transparent;
    position:absolute;
    z-index:4;
    outline:none;
    border:0;
    // backdrop-filter:blur(4)
    right:0;
    cursor:pointer;
    top:0;
    font-size:24px;
    color:white;
    backdrop-filter:blur(5px);

}
button.activeStar{
    color:yellow;
}



.active{
    padding:0 8px;
    
    position:absolute;
    height:100%;
    // width:100%;
    z-index:1;
    
    color:white;
    transition:inherit;
    transiton-delay:inherit;

    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(25,146,45,0) 0%, rgba(0,72,86,1) 100%);
    @media only screen and (min-width: 516px) {
        transform:scale(0);
    }
    

    top:0;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding-bottom:3px;

    
    
    h5{
        font-size:16px;
        font-weight:700;
    }

    p{
        font-size:12px;
        margin:2px 0;
    }
    p:nth-child(3){
        color:yellow;
    }

}


@media only screen and (min-width: 516px) {
    
    &:hover{
        transform:scale(1.12);
        div{
            transform:translateY(0);  
            transform:scale(inherit) ; 
            backdrop-filter: brightness(0.8);
        }
    }
}

   
}


`

export const Img = styled.img`

border-radius: inherit;
width: 150px;
`