import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

interface IHeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: IHeaderProps) => {
  console.log(siteTitle)
  return (
    <HeaderWapper>
      <HeaderContainer>
        <HeaderTitle>
          <HeaderLink to="/">
            {siteTitle}
          </HeaderLink>
        </HeaderTitle>
      </HeaderContainer>
    </HeaderWapper>
  )
}

const HeaderWapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const HeaderTitle = styled.h1`
  margin: 0;
`
const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
