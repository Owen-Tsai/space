/**
 * default layout is used in all pages except index
 */
import Header from '@comps/header'
import Link from 'next/link'
import { ArrowUpLeft } from 'react-feather'
import { useRouter } from 'next/router'
import type { Props } from '@tds/layout'

export default function Layout(
  { children, headerCls }: Props
) {
  const router = useRouter()
  const toListLink = router.route === '/blog/[slug]'
    ? (
      <Link href='/blog' className='flex items-center'>
        <ArrowUpLeft strokeWidth={1.5} />
        <span className='ml-2 font-bold'>返回 /blog</span>
      </Link>
    )
    : undefined

  return (
    <>
      <Header cls={headerCls}>
        {toListLink}
      </Header>
      {children}
    </>
  )
}