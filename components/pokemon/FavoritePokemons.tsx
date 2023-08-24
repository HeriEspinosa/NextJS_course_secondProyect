import { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { getPokemonInfo } from '@/utils';

interface Props {
    pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    const router = useRouter();

    const handleClickPokemonFV = async (id: string) => {
        const namePokemon = await getPokemonInfo(id);
        router.push(`/name/${namePokemon.name}`);
    };

    return (
        <Grid.Container
            gap={2}
            direction="row"
            justify="flex-start"
            css={{ padding: '2em' }}
        >
            {pokemons.map((id) => (
                <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                    <Card
                        isHoverable
                        isPressable
                        css={{ padding: 10 }}
                        onPress={() => handleClickPokemonFV(`${id}`)}
                    >
                        <Card.Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                            width={'100%'}
                            height={140}
                        />
                    </Card>
                </Grid>
            ))}
        </Grid.Container>
    );
};
