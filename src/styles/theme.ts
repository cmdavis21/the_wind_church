export const theme = {
  badge: {
    root: {
      base: 'flex w-fit h-fit items-center gap-1 font-semibold',
      color: {
        gray: 'bg-lightGray text-charcoal dark:bg-softGray dark:text-softCharcoal',
        red: 'bg-red text-white group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300',
        yellow:
          'bg-yellow text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300',
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
  breadcrumb: {
    root: {
      base: '',
      list: 'flex items-center',
    },
    item: {
      base: 'group flex items-center',
      chevron: 'mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2',
      href: {
        off: 'flex items-center text-lg font-medium text-gray-500 dark:text-gray-400',
        on: 'flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
      },
      icon: 'mr-2 h-4 w-4',
    },
  },
  button: {
    base: 'group relative w-fit !h-fit !rounded-md flex items-center justify-center p-0.5 text-center font-normal transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none',
    fullSized: 'w-full',
    color: {
      yellow: 'border border-yellow bg-yellow text-black hover:shadow-md',
      blue: 'border border-blue bg-blue text-white',
      black: 'border border-black bg-black text-white',
      clear_white:
        'border border-white bg-transparent text-white dark:border-softWhite dark:text-softWhite hover:bg-yellow hover:text-black hover:border-yellow dark:hover:bg-softYellow dark:hover:border-softYellow',
      clear_gray:
        'border border-gray-300 bg-transparent text-gray-300 hover:bg-gray-300 text-black',
      clear_black:
        '!border !border-black bg-transparent text-black hover:bg-blue hover:text-yellow',
      red: 'border border-red bg-red text-white',
      white:
        'border border-black bg-white dark:bg-softWhite text-black hover:bg-yellow hover:border-yellow',
      info: 'border-0 bg-transparent text-charcoal hover:bg-lightGray hover:underline hover:text-black hover:border-yellow',
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
      lg: 'px-5 py-2.5 text-base',
      xl: 'px-6 py-3 text-base',
      sm_md: 'px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base',
    },
  },
  dropdown: {
    arrowIcon: 'ml-2 h-4 w-4',
    content: 'py-1 focus:outline-none',
    floating: {
      animation: 'transition-opacity',
      arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
          dark: 'bg-gray-900 dark:bg-gray-700',
          light: 'bg-white',
          auto: 'bg-white dark:bg-gray-700',
        },
        placement: '-4px',
      },
      base: 'z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
      content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
      divider: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
      header: 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
      hidden: 'invisible opacity-0',
      item: {
        container: '',
        base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
        icon: 'mr-2 h-4 w-4',
      },
      style: {
        dark: 'bg-gray-900 text-white dark:bg-gray-700',
        light: 'border border-gray-200 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
      },
      target: 'w-fit',
    },
    inlineWrapper: 'flex items-center',
  },
  label: {
    root: {
      base: 'text-[16px] xl:text-[18px]',
      colors: {
        gray: 'text-charcoal dark:text-softWhite',
        white: 'text-white',
      },
      disabled: 'opacity-50',
    },
  },
  modal: {
    root: {
      base: 'fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden inset-0 h-full',
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
      base: 'relative h-full w-full p-4 md:h-auto',
      inner: 'relative flex flex-col max-h-[90dvh] rounded-lg bg-white shadow dark:bg-gray-700',
    },
    body: {
      base: 'flex-1 overflow-auto p-6',
      popup: 'pt-0',
    },
    header: {
      base: 'flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600',
      popup: 'border-b-0 p-2',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5',
      },
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
      popup: 'border-t',
    },
  },
  radio: {
    root: {
      base: 'h-6 w-6 rounded-full border border-lightGray dark:border-softGray !text-yellow dark:!text-softYellow focus:ring-0 hover:cursor-pointer',
    },
  },
  textarea: {
    base: 'block w-full rounded-md border text-md disabled:cursor-default disabled:opacity-50 p-3',
    colors: {
      gray: 'border-lightGray bg-white text-charcoal focus:border-yellow focus:ring-yellow dark:border-softCharcoal dark:bg-softCharcoal dark:text-softWhite dark:placeholder-softWhite dark:focus:border-yellow dark:focus:ring-yellow',
    },
    withShadow: {
      on: 'shadow-sm dark:shadow-sm-light',
      off: '',
    },
  },
  textInput: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-md text-gray-900',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-gray-500',
      },
      rightIcon: {
        base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
        svg: 'h-5 w-5 text-gray-500',
      },
      input: {
        base: 'block w-full border disabled:cursor-default disabled:opacity-50',
        sizes: {
          sm: 'p-2 sm:text-sm',
          md: 'p-3 text-md',
          lg: 'p-4 sm:text-base',
        },
        colors: {
          gray: 'border-lightGray bg-white text-charcoal focus:border-yellow focus:ring-yellow dark:border-softCharcoal dark:bg-softCharcoal dark:text-softWhite dark:placeholder-softWhite dark:focus:border-yellow dark:focus:ring-yellow',
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
      label: 'ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300',
    },
    toggle: {
      base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0',
      checked: {
        on: 'after:translate-x-full after:border-white rtl:after:-translate-x-full',
        off: 'border-lightGray bg-lightGray dark:border-softGray dark:bg-softGray',
        color: {
          blue: 'border-cyan-700 bg-cyan-700',
          dark: 'bg-dark-700 border-dark-900',
          light: 'bg-light-700 border-light-900',
          yellow: 'border-yellow bg-yellow',
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
      'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
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
          gray: 'border-lightGray bg-white text-charcoal focus:border-yellow focus:ring-yellow dark:border-softCharcoal dark:bg-softCharcoal dark:text-softWhite dark:placeholder-softWhite dark:focus:border-yellow dark:focus:ring-yellow',
        },
      },
    },
  },
};
