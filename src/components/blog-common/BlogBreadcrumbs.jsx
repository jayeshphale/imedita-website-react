import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import styles from './BlogBreadcrumbs.module.css';

export function BlogBreadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
      <ol className={styles.breadcrumbList} itemScope itemType="https://schema.org/BreadcrumbList">
        <li
          className={styles.breadcrumbItem}
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link to="/" className={styles.breadcrumbLink} itemProp="item">
            <Home size={14} className={styles.homeIcon} />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;

          return (
            <li
              key={item.label || index}
              className={styles.breadcrumbItem}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight size={13} className={styles.separator} aria-hidden="true" />
              {isLast || !item.href ? (
                <span className={styles.currentCrumb} itemProp="name" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className={styles.breadcrumbLink} itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BlogBreadcrumbs;
