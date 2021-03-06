import styled,{ css } from 'styled-components';

export const Container = styled.div`
position: relative;
background: grey;
border-radius:5px;
margin-bottom: 10px;
padding: 15px;
box-shadow: 0 1px 4px 0 black;
border-top:20px solid rgba(130,136,145, 0.4);
cursor: grab;

header{
  position: absolute;
  top: -22px;
  left: 15px;

}

p{
  font-weight: 500;
  line-height: 20px;
}

  img{
      height: 30px;
      width: 30px;
      border: solid 1px orange;
      border-radius: 50px;
      margin-top: 5px;

  }
 ${props => props.isDragging && css`

 border: 2px dashed rgba(138,43,226,0.2);
 padding-top: 31px;
 border-radius: 0;
 background: transparent ;
 box-shadow: none;
 cursor: grabbing;

 p,img,header{
   opacity: 0;
 }
 `}

  
`;
export const Label = styled.span`
width: 10px;
height: 10px;
border-radius: 2px;
display: inline;
background: ${props => props.color};
`;