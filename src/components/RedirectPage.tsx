import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function RedirectPage({
  path,
}: {
  /** Path of a docs page, e.g. `get-started/what-is-amp/`. */
  path: string;
}): ReactNode {
  const target = useBaseUrl(`/${path}`);
  const canonical = useBaseUrl(`/${path}`, {absolute: true});
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonical} />
      </Head>
      <Redirect to={target} />
    </>
  );
}
