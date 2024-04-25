import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: rgba(55, 65, 81, 1);
  width: 100%;
`

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexItem = styled.div<{ flex?: number }>`
  padding: 10px;
  box-sizing: border-box;
  ${props => props.flex ? `flex: ${props.flex}` : undefined};

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
`

export const SubHeading = styled.span`
  display: block;
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
`

export const HeroSection = styled.div`
  align-items: center;
  background-color: hsla(214, 62%, 21%, 1);
  border: none;
  box-sizing: border-box;
  color: rgba(55, 65, 81, 1);
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3.5rem;
  border-radius: 1.5rem;
  padding: 3rem 2rem;
`

export const Footer = styled.div`
  color: rgba(107, 114, 128, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 3.5rem;
  opacity: 0.6;
  text-align: center;
`

export const Alert = styled.div<{ type?: 'error' | 'success'; }>`
  background-color: ${props => props.type === 'error' ? '#ff4646' : '#2eca79'};
  color: white;
  font-size: 0.775rem;
  line-height: 1.25rem;
  text-align: center;
  padding: 0.6rem;
  border-radius: 4px;
`

export const Button = styled.button`
  background-color: #ffe96b;
  color: hsla(214, 62%, 21%, 1);
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.8rem;
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.5s;
  }
`
