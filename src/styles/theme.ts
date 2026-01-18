export const theme = {
  alert: {
    base: 'flex flex-col gap-2 p-4 text-sm',
    borderAccent: 'border-b-[2.5px] border-l-[2.5px] border-t-px border-r-px',
    closeButton: {
      base: '-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
      icon: 'h-5 w-5',
      color: {
        gray: 'bg-light-gray dark:bg-dark-gray text-light-gray dark:text-dark-gray hover:bg-drak-gray dark:hover:bg-light-gray focus:ring-light-gray dark:focus:ring-dark-gray',
        failure: 'bg-error/10 text-error hover:bg-error/10 focus:ring-error',
        success: 'bg-success/10 text-success hover:bg-success/50 focus:ring-success',
        warning: 'bg-warning/10 text-warning hover:bg-warning focus:ring-warning',
      },
    },
    color: {
      gray: 'border-light-gray dark:border-dark-gray bg-light-gray/10 dark:bg-dark-gray/10 text-light-primaryText dark:text-dark-primaryText',
      failure: 'border-error bg-error/10 text-error',
      success: 'border-success bg-success/10 text-success',
      warning: 'border-warning bg-warning/10 text-warning',
    },
    icon: 'mr-3 inline h-5 w-5 shrink-0',
    rounded: 'rounded-lg',
    wrapper: 'flex items-center',
  },
  badge: {
    root: {
      base: 'flex w-fit h-fit items-center gap-1 font-semibold',
      color: {
        gray: 'bg-light-gray text-light-primaryText dark:bg-dark-gray dark:text-dark-primaryText',
        red: 'bg-error text-white group-hover:bg-error/75 dark:bg-error/75 dark:text-dark-primaryText',
        yellow: 'bg-brand-primary text-light-primaryText',
      },
      href: 'group',
      size: {
        xs: 'p-1 text-xs',
        sm: 'p-1.5 text-sm',
      },
    },
    icon: {
      off: 'rounded px-2 py-0.5',
      on: 'rounded-full p-1.5',
      size: {
        xs: 'h-3 w-3',
        sm: 'h-3.5 w-3.5',
      },
    },
  },
  button: {
    base: 'group relative w-fit !h-fit !rounded-md flex items-center justify-center p-0.5 text-center font-normal transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none',
    fullSized: 'w-full',
    color: {
      primary:
        'border border-brand-primary bg-brand-primary text-black hover:bg-brand-primary/80 hover:shadow-md',
      secondary:
        'border border-light-navy bg-light-navy text-white hover:bg-light-navy/80 dark:border-dark-navy dark:bg-dark-navy dark:text-white dark:hover:bg-light-navy',
      info: 'border border-light-gray bg-transparent text-light-primaryText hover:bg-light-gray hover:text-black dark:border-dark-gray dark:bg-transparent dark:text-dark-primaryText dark:hover:bg-dark-gray dark:hover:text-white',
      teritiary:
        'border border-light-neutral bg-transparent text-white hover:bg-light-gray hover:text-light-primaryText dark:border-dark-neutral dark:bg-transparent dark:text-dark-primaryText dark:hover:bg-dark-gray',
      danger:
        'border border-error bg-error text-white hover:bg-error/80 dark:border-error dark:bg-error dark:text-white dark:hover:bg-error/70',
    },
    disabled: 'cursor-not-allowed opacity-50 pointer-events-none',
    pill: {
      off: 'rounded-lg',
      on: '!rounded-full',
    },
    size: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-lg py-2.5 text-base',
      xl: 'px-6 py-3 text-lg',
    },
  },
  checkbox: {
    root: {
      base: 'h-4 w-4 appearance-none rounded border border-light-gray bg-light-neutral bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-dark-gray dark:bg-dark-neutral dark:checked:border-transparent dark:checked:bg-current',
      color: {
        default:
          'text-brand-primary focus:ring-brand-primary dark:ring-offset-dark-bg dark:focus:ring-brand-primary',
      },
      indeterminate:
        'border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current',
    },
  },
  label: {
    root: {
      base: 'text-sm font-medium',
      disabled: 'opacity-50',
      colors: {
        default: 'text-light-primaryText dark:text-dark-primaryText',
        info: 'text-light-primaryText dark:text-dark-primaryText',
        light: 'text-white',
        failure: 'text-error dark:text-error',
        warning: 'text-warning dark:text-warning',
        success: 'text-success dark:text-success',
      },
    },
  },
  modal: {
    root: {
      base: 'fixed inset-x-0 top-0 z-50 h-full overflow-y-auto overflow-x-hidden inset-0 h-full',
      show: {
        on: 'flex bg-black bg-opacity-50 dark:bg-opacity-80',
        off: 'hidden',
      },
      sizes: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
      },
      positions: {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'center-left': 'items-center justify-start',
        center: 'items-center justify-center',
        'center-right': 'items-center justify-end',
        'bottom-right': 'items-end justify-end',
        'bottom-center': 'items-end justify-center',
        'bottom-left': 'items-end justify-start',
      },
    },
    content: {
      base: 'relative h-full w-full p-4 md:h-auto font-sans',
      inner: 'relative flex flex-col max-h-[90dvh] rounded-lg bg-light-bg shadow dark:bg-dark-bg',
    },
    body: {
      base: 'flex-1 overflow-auto p-6 text-light-primaryText dark:text-dark-primaryText',
      popup: 'pt-0',
    },
    header: {
      base: 'flex items-start justify-between rounded-t border-b p-5 dark:border-dark-gray font-sans',
      popup: 'border-b-0 p-2',
      title: 'text-xl font-medium text-light-primaryText dark:text-dark-primaryText',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-light-gray hover:bg-light-neutral hover:text-light-primaryText dark:hover:bg-dark-neutral dark:hover:text-white',
        icon: 'h-5 w-5',
      },
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-light-gray p-6 dark:border-dark-gray',
      popup: 'border-t',
    },
  },
  radio: {
    root: {
      base: 'h-6 w-6 rounded-full border-2 border-light-gray dark:border-dark-gray text-brand-primary dark:text-brand-primary focus:ring-brand-primary hover:cursor-pointer disabled:opacity-50',
    },
  },
  tabs: {
    base: 'flex flex-col gap-2',
    tablist: {
      base: 'flex text-center',
      variant: {
        default: 'flex-wrap border-b border-light-gray dark:border-dark-gray',
        underline: '-mb-px flex-wrap border-b border-light-gray dark:border-dark-gray',
        pills:
          'flex-wrap space-x-2 text-sm font-medium text-light-primaryText dark:text-dark-primaryText',
        fullWidth:
          'grid w-full grid-flow-col divide-x divide-light-gray rounded-none text-sm font-medium shadow dark:divide-dark-gray dark:text-dark-primaryText',
      },
      tabitem: {
        base: 'flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-light-secondaryText disabled:dark:text-dark-secondaryText',
        variant: {
          default: {
            base: 'rounded-t-lg',
            active: {
              on: 'bg-light-neutral text-light-primaryText dark:bg-dark-neutral dark:text-dark-primaryText',
              off: 'text-light-charcoal hover:bg-light-gray/50 hover:text-light-charcoal dark:text-dark-charcoal dark:hover:bg-dark-gray/50 dark:hover:text-dark-charcoal',
            },
          },
          underline: {
            base: 'rounded-t-lg',
            active: {
              on: 'border-b-2 border-brand-primary font-bold',
              off: 'border-b-2 border-transparent text-light-primaryText hover:opacity-75',
            },
          },
          pills: {
            base: '',
            active: {
              on: 'rounded-lg bg-brand-primary text-light-bg',
              off: 'rounded-lg hover:bg-light-gray hover:text-light-charcoal dark:hover:bg-dark-gray dark:hover:text-dark-charcoal',
            },
          },
          fullWidth: {
            base: 'ml-0 flex w-full rounded-none first:ml-0',
            active: {
              on: 'rounded-none bg-light-neutral p-4 text-brand-primary dark:bg-dark-neutral dark:text-brand-primary',
              off: 'rounded-none bg-transparent hover:bg-light-neutral/50 hover:text-brand-primary/50 dark:bg-transparent dark:hover:bg-dark-neutral/50 dark:hover:text-brand-primary/50',
            },
          },
        },
        icon: 'mr-2 h-5 w-5',
      },
    },
    tabitemcontainer: {
      base: '',
      variant: {
        default: '',
        underline: '',
        pills: '',
        fullWidth: '',
      },
    },
    tabpanel: 'py-3',
  },
  textarea: {
    base: 'block w-full rounded-md border text-md disabled:cursor-default disabled:opacity-50 p-3',
    colors: {
      gray: 'border-light-gray bg-light-bg text-light-primaryText placeholder-light-secondaryText focus:border-brand-primary focus:ring-brand-primary dark:border-dark-gray dark:bg-dark-bg dark:text-dark-primaryText dark:placeholder-dark-secondaryText dark:focus:border-brand-primary dark:focus:ring-brand-primary',
    },
    withShadow: {
      on: 'shadow-sm dark:shadow-sm-light',
      off: '',
    },
  },
  textInput: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-light-gray bg-light-gray px-3 text-md text-light-primaryText dark:border-dark-gray dark:bg-dark-gray dark:text-dark-primaryText',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-light-secondaryText dark:text-dark-secondaryText',
      },
      rightIcon: {
        base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
        svg: 'h-5 w-5 text-light-secondaryText dark:text-dark-secondaryText',
      },
      input: {
        base: 'block w-full border disabled:cursor-default disabled:opacity-50',
        sizes: {
          sm: 'p-2 sm:text-sm',
          md: 'p-3 text-md',
          lg: 'p-4 sm:text-base',
        },
        colors: {
          gray: 'border-light-gray bg-light-bg text-light-primaryText placeholder-light-secondaryText focus:border-brand-primary focus:ring-brand-primary dark:border-dark-gray dark:bg-dark-bg dark:text-dark-primaryText dark:placeholder-dark-secondaryText dark:focus:border-brand-primary dark:focus:ring-brand-primary',
        },
        withRightIcon: {
          on: 'pr-10',
          off: '',
        },
        withIcon: {
          on: 'pl-10',
          off: '',
        },
        withAddon: {
          on: 'rounded-r-lg',
          off: 'rounded-md',
        },
        withShadow: {
          on: 'shadow-sm',
          off: '',
        },
      },
    },
  },
  toggleSwitch: {
    root: {
      base: 'group flex rounded-lg focus:outline-none',
      active: {
        on: 'cursor-pointer',
        off: 'cursor-not-allowed opacity-50',
      },
      label:
        'ms-3 mt-0.5 text-start text-sm font-medium text-light-primaryText dark:text-dark-primaryText',
    },
    toggle: {
      base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0',
      checked: {
        on: 'after:translate-x-full after:border-white rtl:after:-translate-x-full',
        off: 'border-light-gray bg-light-gray dark:border-dark-gray dark:bg-dark-gray',
        color: {
          yellow: 'border-brand-primary bg-brand-primary',
          blue: 'border-light-navy bg-light-navy',
          dark: 'bg-dark-bg border-dark-gray',
          light: 'bg-light-bg border-light-gray',
        },
      },
      sizes: {
        sm: 'h-5 w-9 min-w-9 after:left-px after:top-px after:h-4 after:w-4 rtl:after:right-px',
        md: 'h-6 w-11 min-w-11 after:left-px after:top-px after:h-5 after:w-5 rtl:after:right-px',
        lg: 'h-7 w-14 min-w-14 after:left-1 after:top-0.5 after:h-6 after:w-6 rtl:after:right-1',
      },
    },
  },
  select: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-light-gray bg-light-gray px-3 text-sm text-light-primaryText dark:border-dark-gray dark:bg-dark-gray dark:text-dark-primaryText',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-light-secondaryText dark:text-dark-secondaryText',
      },
      select: {
        base: 'block w-full border disabled:cursor-default disabled:opacity-50',
        withIcon: {
          on: 'pl-10',
          off: '',
        },
        withAddon: {
          on: 'rounded-r-lg',
          off: 'rounded-md',
        },
        withShadow: {
          on: 'shadow-sm dark:shadow-sm-light',
          off: '',
        },
        sizes: {
          xs: 'p-1 text-[15px]',
          sm: 'p-2 text-xs',
          md: 'p-3 text-md',
          lg: 'p-4 text-md',
        },
        colors: {
          gray: 'border-light-gray bg-light-bg text-light-primaryText placeholder-light-secondaryText focus:border-brand-primary focus:ring-brand-primary dark:border-dark-gray dark:bg-dark-bg dark:text-dark-primaryText dark:placeholder-dark-secondaryText dark:focus:border-brand-primary dark:focus:ring-brand-primary',
        },
      },
    },
  },
};
