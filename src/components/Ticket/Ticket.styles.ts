import styled from 'styled-components';

export const TicketCard = styled.div`
  border: 1px solid #DFE5EC;
  border-radius: 7px;
  box-shadow: 
          rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  width: 502px;
  height: 184px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TicketAmount = styled.h2`
  font-size: 24px;
  //font-weight: 600;
  //line-height: 24px;
  //text-align: left;
  margin: 0;
  color: #2196F3;
;
`

export const TicketLogo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`
