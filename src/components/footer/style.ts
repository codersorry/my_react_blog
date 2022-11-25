import styled from 'styled-components';

export const FooterStyled = styled.div`
  margin-top: 1.2rem;
  color: #888;
  /* background-color: #b2e0df; */
  /* border-top: rgba(0, 0, 0, 0.1) solid 1.2px; */
  padding: 1.5rem 0;

  .footer-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-left {
    flex: 1;
    text-align: right;
    padding-right: 10px;
    font-size: 20px;
    font-weight: 600;
    color: black;
  }
  .footer-middle {
    font-size: 14px;
    flex: 0.6;
    padding-left: 10px;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    .footer-middle-left {
      flex: 1;
    }
    .footer-middle-right {
      flex: 1;
      position: relative;
      img {
        position: absolute;
        width: 180px;
        top: -72px;
      }
    }
  }
  .footer-right {
    flex: 1;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
