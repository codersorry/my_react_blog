import styled from 'styled-components';

type AboutStyledProps = {
  showWhat: string;
};

export const AboutStyled = styled.div<AboutStyledProps>`
  .toggleBox {
    user-select: none;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 80px;
    width: 380px;
    overflow-x: hidden;
    //background-color: #13fccd;
  }
  .toggle {
    flex: 1.5;
    font-size: calc(8em);
    position: relative;
    width: 1em;
    height: 0.1em;
    border-radius: 0.5em;
    border: 0.015em solid #9f9f9f;
    background-image: linear-gradient(#f63c4d, #f3999c, #f63c4d);
    //background-image: linear-gradient(#f2f2f2, #fff, #f2f2f2);
    margin: 0.26em 0.15em;
    cursor: pointer;
    filter: drop-shadow(0.015em 0.015em 0.01em rgba(0, 0, 0, 0.3));
  }

  .blog-words {
    flex: 1;
    text-align: center;
    font-size: ${(props) => (props.showWhat === 'blog' ? '25px' : '20px')};
    color: ${(props) => (props.showWhat === 'blog' ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.6)')};
    font-weight: 700;
    padding: 0 10px;
    cursor: pointer;
    transition: font-size 0.25s linear, width 0.25s linear;
  }

  .blogger-words {
    flex: 1;
    text-align: center;
    font-size: ${(props) => (props.showWhat === 'blogger' ? '25px' : '20px')};
    color: ${(props) => (props.showWhat === 'blogger' ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.6)')};
    font-weight: 700;
    padding: 0 10px;
    cursor: pointer;
    transition: font-size 0.25s linear, width 0.25s linear;
  }

  .toggle-btn::after {
    position: absolute;
    top: -1.8rem;
    left: 0;
    width: 50%;
    font-size: 0.35em;
    text-align: center;
    transition: all 500ms cubic-bezier(0.34, 0.78, 0.55, 1.4);
  }

  .toggle-checkbox {
    position: absolute;
    visibility: hidden;
  }

  .toggle-checkbox:checked + .toggle-btn::after {
    left: 50%;
  }

  .blog-blogger .toggle-btn::after {
    content: '🏠';
  }

  .blog-blogger .toggle-checkbox:checked + .toggle-btn::after {
    content: '🦸‍♂️';
  }
`;
