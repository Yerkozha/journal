import {
    flexbox,
    grid,
    space,
    layout,
    position,
    border,
    color,
    height,
    shadow,
  } from 'styled-system';
  import styled from 'styled-components';
  
  const Box:any = styled.div`
    box-sizing: border-box;
    gap: ${({ gap } : {gap?: string}) => gap};
    ${layout}
    ${position}
    ${height}
    ${grid}
    ${flexbox}
    ${space}
    ${border}
    ${color}
    ${shadow}
  `;
  
  export default Box;
  