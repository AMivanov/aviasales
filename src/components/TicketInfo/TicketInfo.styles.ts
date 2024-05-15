import styled from 'styled-components';

export const FlightOptions = styled.div`
  font-family: 'OpenSansSemiBold', sans-serif;
  height: 39px;
  width: 462px;
  display: flex;
  //justify-content: space-between;
  padding-right: 60px;
`

export const Direction = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`

export const IntervalFlight = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 200px;
`

export const StopsFlight = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 360px;
`

export const FlightText = styled.p`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #A0B0B9;
  margin: 0;
`

export const FlightInfo = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  color: #4A4A4A;
`