export const cookOptions = (options: Options) => {
    return options.map((option) => (typeof option === 'string' ? { label: option, value: option } : option));
  };
  
  