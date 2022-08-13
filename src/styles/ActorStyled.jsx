import styled from "styled-components";


export const Card = styled.div`
margin:10px;
transition:400ms;
transition-delay:200ms;
position:relative;
width:150px;
overflow-y:hidden;
border-radius: 10px;
overflow-x:hidden;
div{
    color:white;
    height:75px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.5555264342064952) 0%, rgba(4,18,37,0.9308765742625175) 100%, rgba(0,57,129,0.9981034650188201) 100%);
    padding:5px;
    transform: translateY(-4px);
    h5{
        text-decoration:none;
        text-transform: uppercase;
        margin:0;
        font-size:16px;
    }
    p{
        font-size:14px;
    }
}
    `

export const Img = styled.img`

border-top-left-radius:inherit;
border-top-right-radius:inherit;
width: 150px;
`