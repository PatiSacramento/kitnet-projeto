import { GlobalStyle } from '@/styles/global'
import HomePage from './homepage'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100vw;

`
export default function Home() {
  return (
    <PageContainer>
      <GlobalStyle />
      <HomePage />
    </PageContainer>
  )
}
