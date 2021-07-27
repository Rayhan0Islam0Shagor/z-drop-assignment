import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Z-drop</title>
      </Head>

      <main className="main">
        <Image
          src="/images/zdrop-logo.svg"
          height="150px"
          width="150px"
          loading="lazy"
          objectFit="contain"
        />
        <h1>Hello World!</h1>
        <h4>
          You need to go{' '}
          <Link href="/cart">
            <a style={{ color: 'blue' }}>/cart</a>
          </Link>
        </h4>
      </main>
    </div>
  );
};

export default Home;
