const getStats = (props) => {
  return [
    {
      statsName: props.stats[0].stat.name,
      statsValues: props.stats[0].base_stat,
    },
    {
      statsName: props.stats[1].stat.name,
      statsValues: props.stats[1].base_stat,
    },
    {
      statsName: props.stats[2].stat.name,
      statsValues: props.stats[2].base_stat,
    },
    {
      statsName: props.stats[3].stat.name,
      statsValues: props.stats[3].base_stat,
    },
    {
      statsName: props.stats[4].stat.name,
      statsValues: props.stats[4].base_stat,
    },
    {
      statsName: props.stats[5].stat.name,
      statsValues: props.stats[5].base_stat,
    }
  ];
};

const soma = (props) => {
    return props.stats[0].base_stat +
    props.stats[1].base_stat +
    props.stats[2].base_stat +
    props.stats[3].base_stat +
    props.stats[4].base_stat +
    props.stats[5].base_stat
};

export { getStats, soma };
