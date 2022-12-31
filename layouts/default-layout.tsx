/**
 * default layout is used in all pages except index
 */
import Header from '@comps/header'
import { Component } from 'react'

export default function Layout(
  { children }: { children: JSX.Element | JSX.Element[] }
) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}