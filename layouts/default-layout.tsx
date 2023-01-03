/**
 * default layout is used in all pages except index
 */
import Header from '@comps/header'
import type { Props } from '@tds/layout'

export default function Layout(
  { children, headerCls }: Props
) {
  return (
    <>
      <Header cls={headerCls} />
      {children}
    </>
  )
}