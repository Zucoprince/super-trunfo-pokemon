const getStats = (props) => {
  return [
    {
      statsName: props.randomPokemon.stats[0].stat.name,
      statsValues: props.randomPokemon.stats[0].base_stat,
    },
    {
      statsName: props.randomPokemon.stats[1].stat.name,
      statsValues: props.randomPokemon.stats[1].base_stat,
    },
    {
      statsName: props.randomPokemon.stats[2].stat.name,
      statsValues: props.randomPokemon.stats[2].base_stat,
    },
    {
      statsName: props.randomPokemon.stats[3].stat.name,
      statsValues: props.randomPokemon.stats[3].base_stat,
    },
    {
      statsName: props.randomPokemon.stats[4].stat.name,
      statsValues: props.randomPokemon.stats[4].base_stat,
    },
    {
      statsName: props.randomPokemon.stats[5].stat.name,
      statsValues: props.randomPokemon.stats[5].base_stat,
    }
  ];
};

const soma = (props) => {
    return props.randomPokemon.stats[0].base_stat +
    props.randomPokemon.stats[1].base_stat +
    props.randomPokemon.stats[2].base_stat +
    props.randomPokemon.stats[3].base_stat +
    props.randomPokemon.stats[4].base_stat +
    props.randomPokemon.stats[5].base_stat
};

export { getStats, soma };
