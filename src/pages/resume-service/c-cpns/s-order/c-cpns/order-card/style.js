import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 200px;
  .checkbox-wrapper-31:hover .check {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-31 {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
  }

  .checkbox-wrapper-31 .background {
    fill: #ccc;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 .stroke {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    stroke-dashoffset: 100;
    stroke-dasharray: 100;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 .check {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    stroke-dashoffset: 22;
    stroke-dasharray: 22;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 input[type='checkbox'] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    opacity: 0;
    -appearance: none;
    -webkit-appearance: none;
  }

  .checkbox-wrapper-31 input[type='checkbox']:hover {
    cursor: pointer;
  }

  .checkbox-wrapper-31 input[type='checkbox']:checked + svg .background {
    fill: #6cbe45;
  }

  .checkbox-wrapper-31 input[type='checkbox']:checked + svg .stroke {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-31 input[type='checkbox']:checked + svg .check {
    stroke-dashoffset: 0;
  }
`
