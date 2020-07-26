// import React, { Component } from 'react'
import { useRouter } from "next/router"
import PropTypes from 'prop-types'
// import styled from 'styled-components'

function Link({ children, href, className, inputProps }) {
    const router = useRouter()
    // console.log(inputProps)
    return (
    <a
        href="#"
        onClick={(e) => {
            e.preventDefault()
            // typically you want to use `next/link` for this usecase
            // but this example shows how you can also access the router
            // and use it manually
            router.push(href)
        }}
        className={`nav-link ${className ? className : ""}`}
        {...inputProps}
    >
        {children}
    </a>
    )
}

Link.propTypes = {
    children: PropTypes.any,
    href: PropTypes.string,
    className: PropTypes.string,
    inputProps: PropTypes.any,
};
export default Link