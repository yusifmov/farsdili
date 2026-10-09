/**
 * Ejected from @docusaurus/theme-classic 3.10.1 (DocItem/Layout).
 * Change: the right column is always shown on desktop and holds the book order box (BookOrder) above the TOC;
 * on narrow screens the box is shown after the lesson text.
 */
import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import BookOrder from '@site/src/components/BookOrder';
import styles from './styles.module.css';

function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const isDesktop = windowSize === 'desktop' || windowSize === 'ssr';
  return {
    mobile: canRender ? <DocItemTOCMobile /> : undefined,
    desktop: canRender && isDesktop ? <DocItemTOCDesktop /> : undefined,
    isDesktop,
  };
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  return (
    <div className="row">
      <div className={clsx('col', styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <BookOrder className={styles.mobileOrder} />
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.isDesktop && (
        <div className="col col--3">
          <div className={styles.sideCol}>
            <BookOrder />
            {docTOC.desktop}
          </div>
        </div>
      )}
    </div>
  );
}
