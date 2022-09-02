import styled from 'styled-components'

export const TagsStyled = styled.div`
  text-align: center;
  padding: 1rem;

  h3 {
    font-weight: 600;
  }

  .tags {
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .tags_item {
      margin-top: 5px;
      font-weight: 700;
    }
  }
`
