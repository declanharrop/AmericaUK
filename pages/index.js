import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  img {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`

const index = () => {
  return (
    <Wrapper>
      <img src="/comingSoon.jpg" alt="AmericaUK.com is coming soon"/>
    </Wrapper>
  )
}

export default index;
