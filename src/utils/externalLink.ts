/** Props for outbound checkout / affiliate links. */
export function externalLinkProps(href: string): { target?: string; rel?: string } {
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return { target: '_blank', rel: 'noopener noreferrer sponsored' };
  }
  return {};
}
