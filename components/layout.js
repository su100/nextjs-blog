import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'su100';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <section className={utilStyles.introSection}>
              <div>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.profileImage}
                  height={130}
                  width={130}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </div>
              <div>
                <p className={utilStyles.introduction}>
                  같이 성장을 추구하는 프론트엔드 개발자
                </p>
                <p
                  className={`${utilStyles.introduction} ${utilStyles.font500}`}
                >
                  React, ES6+, Redux, react-query, zustand, styled-components
                </p>
                <p className={utilStyles.introduction}>
                  <strong>GITHUB:</strong>{' '}
                  <a href="https://github.com/su100">
                    https://github.com/su100
                  </a>
                </p>
              </div>
            </section>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.profileImage}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.heading2Xl}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
