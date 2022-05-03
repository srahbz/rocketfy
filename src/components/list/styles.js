import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  /* quero estilizar toda div que antes dela tenha uma div */
  & + div{
      border-left:2px solid rgba(138,43,216, 0.05)

  }

  header{
    display: flex ;
    justify-content: space-between;
    align-items: center;
    height: 42px;
      h2{
        font-weight:500;
        font-size: 16px;
        padding: 0 10px;

      }
      button{
          width: 42px;
          height:42px;
          border-radius: 15px;
          background: blueviolet;
          cursor: pointer;

      }
  }
  ul{
      margin-top: 30px;
  }
`;
