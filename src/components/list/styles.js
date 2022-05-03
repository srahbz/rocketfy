import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  /* quero estilizar toda div que antes dela tenha uma div */
  & + div{
      border-left:2px solid rgba(70,10,105, 0.5)

  }
`;
