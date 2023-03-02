import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 155px;
  .container {
    position: relative;
    left: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
  }
  .container .drop {
    position: relative;
    /* border: 1px solid; */
    width: 450px;
    height: 450px;
    /* width: 500px;
	height: 600px; */
    box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
      25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
      inset -20px -20px 25px rgba(255, 255, 255, 0.9);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    //登录
    border-radius: 52% 48% 33% 67% / 38% 45% 55% 62%;
    /* border-radius: 70% 30% 43% 57% / 23% 81% 19% 77%   ; */
  }
  .container .drop:hover {
    border-radius: 50%;
  }
  .container .drop::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 85px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
  }
  .container .drop::after {
    content: '';
    position: absolute;
    top: 90px;
    left: 110px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
  }
  .container .drop .content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 40px;
    gap: 10px;
    .msgBtn {
      &:disabled {
        color: red;
        cursor: not-allowed !important;
      }
    }
  }
  .container .drop .content .loginMethod {
    width: 200px;
    height: 120px;
    background-color: pink;
    border-radius: 74% 26% 42% 58% / 46% 81% 19% 54%;
  }
  .container .drop .content h2 {
    position: relative;
    margin-top: -18px;
    color: #333;
    font-size: 1.5em;
  }
  .container .drop .content .codeImg {
    width: 100px;
    margin-bottom: 8px;
    margin-right: 6px;
    cursor: pointer;
  }
  .container .drop .content form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -30px;
    justify-content: center;
    align-items: center;
  }
  .container .drop .content form .input-boxes {
    display: flex;
  }
  .container .drop .content form .inputBox {
    position: relative;
    width: 225px;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
      inset -2px -5px 10px rgba(255, 255, 255, 1),
      15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025);
    border-radius: 25px;
    overflow: hidden;
  }
  .container .drop .content form .inputBox::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 65%;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
  .container .drop .content form .inputBox .subBtn {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-size: 1em;
    padding: 10px 15px;
  }
  .container .drop .content form .inputBox .subBtn {
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    cursor: pointer;
    letter-spacing: 0.1em;
    font-weight: 500;
  }
  .container .drop .content form .inputBox:last-child {
    width: 80px;
    background: #ff0f5b;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
      15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025);
    transition: 0.5s;
  }
  .container .drop .content form .inputBox:first-child {
    width: 120px;
    background-color: #19af42;
    margin-right: 10px;
  }
  .container .drop .content form .inputBox:first-child:hover {
    width: 150px;
  }

  .btns {
    position: absolute;
    right: -120px;
    bottom: 0;
    width: 120px;
    height: 120px;
    background: #c61dff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    line-height: 1.2em;
    letter-spacing: 0.1em;
    font-size: 0.8em;
    transition: 0.25s;
    text-align: center;
    box-shadow: inset 10px 10px 10px rgba(190, 1, 254, 0.05),
      15px 25px 10px rgba(190, 1, 254, 0.1),
      15px 20px 20px rgba(190, 1, 254, 0.1),
      inset -10px -10px 15px rgba(255, 255, 255, 0.5);
    border-radius: 44% 56% 65% 35% / 57% 58% 42% 43%;
  }
  .change {
    width: 90px;
    height: 90px;
    background-image: linear-gradient(
      25deg,
      #c3405f,
      #d87f8c,
      #e7b7bd,
      #f0f0f0
    );
    bottom: 260px;
    right: -100px;
  }

  .btns::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.45;
  }
  .btns.signup {
    bottom: 150px;
    right: -120px;
    width: 80px;
    height: 80px;
    border-radius: 49% 51% 52% 48% / 63% 59% 41% 37%;
    background: #01b4ff;
    box-shadow: inset 10px 10px 10px rgba(1, 180, 255, 0.05),
      15px 25px 10px rgba(1, 180, 255, 0.1),
      15px 20px 20px rgba(1, 180, 255, 0.1),
      inset -10px -10px 15px rgba(255, 255, 255, 0.5);
  }
  .btns.signup::before {
    left: 20px;
    width: 15px;
    height: 15px;
  }
  .btns:hover {
    border-radius: 50%;
  }
`
