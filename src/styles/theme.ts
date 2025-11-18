export const theme = {
  alert: {
    base: 'flex flex-col gap-2 p-4 text-sm',
    borderAccent: 'border-b-[2.5px] border-l-[2.5px] border-t-[1px] border-r-[1px]',
    closeButton: {
      base: '-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
      icon: 'h-5 w-5',
      color: {
        gray: 'bg-gray text-gray hover:bg-grayDark focus:ring-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
        failure: 'bg-error/10 text-error hover:bg-error/10 focus:ring-error',
        success: 'bg-success/10 text-success hover:bg-success/50 focus:ring-success',
        warning: 'bg-primary/10 text-primary hover:bg-primaryDark focus:ring-primaryDark',
      },
    },
    color: {
      gray: 'border-gray bg-grayDark text-textPrimary',
      failure: 'border-error bg-error/10 text-error',
      success: 'border-success bg-success/10 text-success',
      warning: 'border-primary bg-primary/10 text-primaryDark',
    },
    icon: 'mr-3 inline h-5 w-5 shrink-0',
    rounded: 'rounded-lg',
    wrapper: 'flex items-center',
  },
  badge: {
    root: {
      base: 'flex w-fit h-fit items-center gap-1 font-semibold',
      color: {
        gray: 'bg-gray text-textPrimary dark:bg-grayDark dark:text-textInverse',
        red: 'bg-error text-white group-hover:bg-red-300 dark:bg-red-300 dark:text-red-900 dark:group-hover:bg-red-400',
        yellow:
          'bg-primary text-navy group-hover:bg-primaryDark dark:bg-primaryDark dark:text-yellow-900 dark:group-hover:bg-primary-400',
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
        'border border-primary bg-primary text-black hover:bg-primaryDark/80 hover:shadow-md dark:border-primaryDark dark:bg-primaryDark dark:text-black dark:hover:bg-primary',
      secondary:
        'border border-navy bg-navy text-white hover:bg-navyLight dark:border-navyLight dark:bg-navyLight dark:text-white dark:hover:bg-navy',
      ghost:
        'border border-gray bg-transparent text-textPrimary hover:bg-gray hover:text-black dark:border-grayDark dark:bg-transparent dark:text-textInverse dark:hover:bg-grayDark dark:hover:text-white',
      danger:
        'border border-error bg-error text-white hover:bg-red-600 dark:border-red-700 dark:bg-red-700 dark:text-white dark:hover:bg-error',
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
  checkbox: {
    root: {
      base: 'h-4 w-4 appearance-none rounded border border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:checked:border-transparent dark:checked:bg-current',
      color: {
        default:
          'text-primary focus:ring-primary dark:ring-offset-primaryDark dark:focus:ring-primaryDark',
      },
      indeterminate:
        'border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current',
    },
  },
  label: {
    root: {
      base: 'text-[16px] xl:text-[18px]',
      colors: {
        gray: 'text-textPrimary dark:text-textInverse',
        white: 'text-white',
      },
      disabled: 'opacity-50',
    },
  },
  megaMenu: {
    root: {
      base: 'bg-white pt-3 pb-5 px-[20px] 2xl:px-[75px] min-[1800px]:px-[200px] dark:border-grayDark dark:bg-backgroundDark',
      rounded: {
        on: 'rounded-b-lg',
        off: '',
      },
      bordered: {
        on: 'shadow-sm border border-x-0 border-t-0 border-gray',
        off: '',
      },
      inner: {
        base: 'flex items-end justify-between gap-lg',
        fluid: {
          on: '',
          off: 'container',
        },
      },
    },
    brand: {
      base: 'flex items-center',
    },
    collapse: {
      base: 'w-full md:block',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row justify-evenly md:space-x-8 md:text-sm md:font-medium',
      hidden: {
        on: 'hidden',
        off: '',
      },
    },
    link: {
      base: 'block py-2 pl-3 pr-4 md:p-0',
      active: {
        on: 'bg-primaryDark text-white md:bg-transparent md:text-primary dark:text-white',
        off: 'border-b border-gray text-textPrimary hover:bg-gray md:border-0 md:hover:bg-transparent md:hover:text-textSecondary dark:border-grayDark dark:text-textSecondary dark:hover:bg-grayDark dark:hover:text-textInverse md:dark:hover:bg-transparent md:dark:hover:text-textInverse',
      },
      disabled: {
        on: 'text-grayDark hover:cursor-not-allowed dark:text-grayDark',
        off: '',
      },
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-textSecondary hover:bg-gray focus:outline-none focus:ring-2 focus:ring-gray md:hidden dark:text-textInverse dark:hover:bg-grayDark dark:focus:ring-grayDark',
      icon: 'h-6 w-6 shrink-0',
      title: 'sr-only',
    },
    dropdown: {
      base: '',
      toggle: {
        arrowIcon: 'ml-1 h-4 w-4',
        content: 'p-sm focus:outline-none',
        floating: {
          animation: 'transition-opacity duration-500',
          arrow: {
            base: 'absolute z-10 h-2 w-2 rotate-45',
            style: {
              dark: 'bg-backgroundDark',
              light: 'bg-white',
              auto: 'bg-white dark:bg-backgroundDark',
            },
            placement: '-4px',
          },
          base: 'z-10 w-fit border border-skeletonGray shadow-sm divide-y divide-gray rounded-lg shadow focus:outline-none mt-2 block',
          content: 'py-1 text-sm text-textSecondary dark:text-textInverse',
          divider: 'my-1 h-px bg-gray dark:bg-grayDark',
          header: 'block px-4 py-2 text-sm text-textSecondary dark:text-textInverse',
          hidden: 'invisible opacity-0',
          item: {
            container: '',
            base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-textSecondary hover:bg-gray focus:bg-gray focus:outline-none dark:text-textInverse dark:hover:bg-grayDark dark:hover:text-white dark:focus:bg-grayDark dark:focus:text-white',
            icon: 'mr-2 h-4 w-4',
          },
          style: {
            dark: 'bg-backgroundDark text-textInverse',
            light: 'bg-white text-textSecondary',
            auto: 'bg-white dark:bg-backgroundDark',
          },
          target: 'w-fit',
        },
        inlineWrapper: 'flex w-full items-center justify-between',
      },
    },
    dropdownToggle: {
      base: 'py-2 pl-3 pr-4 md:p-0 border-b border-gray text-textPrimary hover:bg-gray md:border-0 md:hover:bg-transparent md:hover:text-primary dark:border-grayDark dark:text-textSecondary dark:hover:bg-grayDark dark:hover:text-textInverse md:dark:hover:bg-transparent md:dark:hover:text-textInverse flex w-full items-center justify-between',
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
      inner:
        'relative flex flex-col max-h-[90dvh] rounded-lg bg-backgroundLight shadow dark:bg-backgroundDark',
    },
    body: {
      base: 'flex-1 overflow-auto p-6 text-textPrimary dark:text-textInverse',
      popup: 'pt-0',
    },
    header: {
      base: 'flex items-start justify-between rounded-t border-b p-5 dark:border-grayDark',
      popup: 'border-b-0 p-2',
      title: 'text-xl font-medium text-textPrimary dark:text-textInverse',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray hover:bg-gray hover:text-textPrimary dark:hover:bg-grayDark dark:hover:text-white',
        icon: 'h-5 w-5',
      },
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray p-6 dark:border-grayDark',
      popup: 'border-t',
    },
  },
  radio: {
    root: {
      base: 'h-6 w-6 rounded-full border-2 border-gray dark:border-grayDark !text-primary dark:!text-primaryDark focus:ring-primary hover:cursor-pointer disabled:opacity-50',
    },
  },
  textarea: {
    base: 'block w-full rounded-md border text-md disabled:cursor-default disabled:opacity-50 p-3',
    colors: {
      gray: 'border-gray bg-backgroundLight text-textPrimary placeholder-textSecondary focus:border-primary focus:ring-primary dark:border-grayDark dark:bg-backgroundDark dark:text-textInverse dark:placeholder-textInverse dark:focus:border-primaryDark dark:focus:ring-primaryDark',
    },
    withShadow: {
      on: 'shadow-sm dark:shadow-sm-light',
      off: '',
    },
  },
  textInput: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-gray bg-gray px-3 text-md text-textPrimary dark:border-grayDark dark:bg-grayDark dark:text-textInverse',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-textSecondary dark:text-textInverse',
      },
      rightIcon: {
        base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
        svg: 'h-5 w-5 text-textSecondary dark:text-textInverse',
      },
      input: {
        base: 'block w-full border disabled:cursor-default disabled:opacity-50',
        sizes: {
          sm: 'p-2 sm:text-sm',
          md: 'p-3 text-md',
          lg: 'p-4 sm:text-base',
        },
        colors: {
          gray: 'border-gray bg-backgroundLight text-textPrimary placeholder-textSecondary focus:border-primary focus:ring-primary dark:border-grayDark dark:bg-backgroundDark dark:text-textInverse dark:placeholder-textInverse dark:focus:border-primaryDark dark:focus:ring-primaryDark',
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
      label: 'ms-3 mt-0.5 text-start text-sm font-medium text-textPrimary dark:text-textInverse',
    },
    toggle: {
      base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0',
      checked: {
        on: 'after:translate-x-full after:border-white rtl:after:-translate-x-full',
        off: 'border-gray bg-gray dark:border-grayDark dark:bg-grayDark',
        color: {
          yellow: 'border-primary bg-primary',
          blue: 'border-navy bg-navy',
          dark: 'bg-backgroundDark border-grayDark',
          light: 'bg-backgroundLight border-gray',
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
      'inline-flex items-center rounded-l-md border border-r-0 border-gray bg-gray px-3 text-sm text-textPrimary dark:border-grayDark dark:bg-grayDark dark:text-textInverse',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-textSecondary dark:text-textInverse',
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
          gray: 'border-gray bg-backgroundLight text-textPrimary placeholder-textSecondary focus:border-primary focus:ring-primary dark:border-grayDark dark:bg-backgroundDark dark:text-textInverse dark:placeholder-textInverse dark:focus:border-primaryDark dark:focus:ring-primaryDark',
        },
      },
    },
  },
};
