import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Navbar } from '../ui';

interface Props {
    title?: string;
    children?: ReactNode;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title || 'Pokemon App'}</title>
                <meta name="author" content="Heri Espinosa" />
                <meta
                    name="description"
                    content={`Informacion del pokemon ${title}`}
                />
                <meta
                    name="keywords"
                    content={`${title}, pokemon, pokedex, pokemons, (otras keys)`}
                />

                <meta
                    property="og:title"
                    content={`Informacion sobre ${title}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la pagina de ${title}`}
                />
                <meta property="og:image" content={`${origin}/banner.png`} />
            </Head>
            <Navbar />

            <main
                style={{
                    padding: '0 1em',
                }}
            >
                {children}
            </main>
        </>
    );
};
