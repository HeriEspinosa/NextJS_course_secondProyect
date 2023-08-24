import Image from 'next/image';
import { Link, Spacer, useTheme } from '@nextui-org/react';

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div className="navbar__header">
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />

            <Link href="/">
                <h2>P</h2>
                <h3>okemon</h3>
            </Link>

            <Spacer css={{ flex: 1 }} />

            <Link href="/favorites">
                <h4>Favoritos</h4>
            </Link>
        </div>
    );
};
