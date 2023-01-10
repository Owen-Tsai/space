import NextLink from 'next/link'

export default function Link ({ href, children }: { href: string, children: JSX.Element | JSX.Element[] }) {
  return href.match(/http(s?):\/\//)
    ? <NextLink href={href} target='_blank'>{children}</NextLink>
    : <NextLink href={href}>{children}</NextLink>
}