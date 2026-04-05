export const theme = {
  alert: {
    base: 'flex flex-col gap-2 p-4 text-sm',
    borderAccent: 'border-b-[2.5px] border-l-[2.5px] border-t-px border-r-px',
    closeButton: {
      base: '-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
      icon: 'h-5 w-5',
      color: {
        gray: 'bg-[#E6E6E6] dark:bg-[#404040] text-[#E6E6E6] dark:text-[#404040] hover:bg-[#404040] dark:hover:bg-[#E6E6E6] focus:ring-[#E6E6E6] dark:focus:ring-[#404040]',
        failure: 'bg-[#D32F2F]/10 text-[#D32F2F] hover:bg-[#D32F2F]/10 focus:ring-[#D32F2F]',
        success: 'bg-[#2E7D32]/10 text-[#2E7D32] hover:bg-[#2E7D32]/50 focus:ring-[#2E7D32]',
        warning: 'bg-[#F9A825]/10 text-[#F9A825] hover:bg-[#F9A825] focus:ring-[#F9A825]',
      },
    },
    color: {
      gray: 'border-[#E6E6E6] dark:border-[#404040] bg-[#E6E6E6]/10 dark:bg-[#404040]/10 text-[#000000] dark:text-[#FFFFFFCC]',
      failure: 'border-[#D32F2F] bg-[#D32F2F]/10 text-[#D32F2F]',
      success: 'border-[#2E7D32] bg-[#2E7D32]/10 text-[#2E7D32]',
      warning: 'border-[#F9A825] bg-[#F9A825]/10 text-[#F9A825]',
    },
    icon: 'mr-3 inline h-5 w-5 shrink-0',
    rounded: 'rounded-lg',
    wrapper: 'flex items-center',
  },
  badge: {
    root: {
      base: 'flex w-fit h-fit items-center gap-1 font-semibold',
      color: {
        gray: 'bg-[#E6E6E6] text-[#000000] dark:bg-[#404040] dark:text-[#FFFFFFCC]',
        red: 'bg-[#D32F2F] text-white group-hover:bg-[#D32F2F]/75 dark:bg-[#D32F2F]/75 dark:text-[#FFFFFFCC]',
        yellow: 'bg-[#fdd738] text-[#000000]',
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
        '!border !border-[#fdd738] !bg-[#fdd738] text-black hover:!bg-[#fdd738]/80 hover:shadow-md',
      secondary:
        '!border !border-[#051050] !bg-gradient-to-br from-[#051050] to-[#334C91] text-white hover:opacity-75',
      info: 'border border-[#E6E6E6] bg-transparent text-[#000000] hover:bg-[#E6E6E6] hover:text-black dark:border-[#404040] dark:bg-transparent dark:text-[#FFFFFFCC] dark:hover:bg-[#404040] dark:hover:text-white',
      teritiary:
        'border border-[#F2F2F2] bg-transparent text-white hover:bg-[#E6E6E6] hover:text-[#000000] dark:border-[#D9D9D9] dark:bg-transparent dark:text-[#FFFFFFCC] dark:hover:bg-[#404040]',
      danger:
        'border border-[#D32F2F] bg-[#D32F2F] text-white hover:bg-[#D32F2F]/80 dark:border-[#D32F2F] dark:bg-[#D32F2F] dark:text-white dark:hover:bg-[#D32F2F]/70',
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
      base: 'h-4 w-4 appearance-none rounded border border-[#E6E6E6] bg-[#F2F2F2] bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-[#404040] dark:bg-[#D9D9D9] dark:checked:border-transparent dark:checked:bg-current',
      color: {
        default:
          'text-[#fdd738] focus:ring-[#fdd738] dark:ring-offset-[#2E2E2E] dark:focus:ring-[#fdd738]',
      },
      indeterminate:
        'border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current',
    },
  },
  label: {
    root: {
      base: 'text-base font-medium',
      disabled: 'opacity-50',
      colors: {
        default: 'text-[#000000] dark:text-[#FFFFFFCC]',
        info: 'text-[#000000] dark:text-[#FFFFFFCC]',
        failure: 'text-[#D32F2F] dark:text-[#D32F2F]',
        warning: 'text-[#F9A825] dark:text-[#F9A825]',
        success: 'text-[#2E7D32] dark:text-[#2E7D32]',
      },
    },
  },
  modal: {
    root: {
      base: 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-[#000000]/80',
      show: {
        on: 'flex',
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
        center: 'items-center justify-center',
      },
    },
    content: {
      base: 'relative w-full p-4 font-sans',
      inner:
        'relative flex flex-col max-h-[90dvh] overflow-y-auto rounded-lg bg-[#FFFFFF] shadow dark:bg-[#2E2E2E]',
    },
    body: {
      base: 'flex-1 overflow-auto p-6 text-[#000000] dark:text-[#FFFFFFCC]',
    },
  },
  radio: {
    root: {
      base: 'h-6 w-6 rounded-full border-2 border-[#E6E6E6] dark:border-[#404040] text-[#fdd738] dark:text-[#fdd738] focus:ring-[#fdd738] hover:cursor-pointer disabled:opacity-50',
    },
  },
  tabs: {
    base: 'flex flex-col gap-2',
    tablist: {
      base: 'flex text-center',
      variant: {
        default: 'flex-wrap border-b border-[#E6E6E6] dark:border-[#404040]',
        underline: '-mb-px flex-wrap border-b border-[#E6E6E6] dark:border-[#404040]',
        pills: 'flex-wrap space-x-2 text-sm font-medium text-[#000000] dark:text-[#FFFFFFCC]',
        fullWidth:
          'grid w-full grid-flow-col divide-x divide-[#E6E6E6] rounded-none text-sm font-medium shadow dark:divide-[#404040] dark:text-[#FFFFFFCC]',
      },
      tabitem: {
        base: 'flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-[#605E5C] disabled:dark:text-[#605E5C]',
        variant: {
          default: {
            base: 'rounded-t-lg text-md font-bold',
            active: {
              on: 'bg-[#F2F2F2] text-[#000000] dark:bg-[#6B6B6B] dark:text-[#FFFFFFCC]',
              off: 'text-[#4A4A4A] hover:bg-[#E6E6E6]/50 hover:text-[#4A4A4A] dark:text-[#6B6B6B] dark:hover:bg-[#404040] dark:hover:text-[#FFFFFFCC]',
            },
          },
          underline: {
            base: 'rounded-t-lg text-md',
            active: {
              on: 'border-b-2 border-[#fdd738] font-bold',
              off: 'border-b-2 border-transparent text-[#000000] hover:opacity-75',
            },
          },
          pills: {
            base: '',
            active: {
              on: 'rounded-lg bg-[#fdd738] text-[#FFFFFF]',
              off: 'rounded-lg hover:bg-[#E6E6E6] hover:text-[#4A4A4A] dark:hover:bg-[#404040] dark:hover:text-[#6B6B6B]',
            },
          },
          fullWidth: {
            base: 'ml-0 flex w-full rounded-none first:ml-0',
            active: {
              on: 'rounded-none bg-[#F2F2F2] p-4 text-[#fdd738] dark:bg-[#D9D9D9] dark:text-[#fdd738]',
              off: 'rounded-none bg-transparent hover:bg-[#F2F2F2]/50 hover:text-[#fdd738]/50 dark:bg-transparent dark:hover:bg-[#D9D9D9]/50 dark:hover:text-[#fdd738]/50',
            },
          },
        },
        icon: 'mr-2 h-5 w-5 fill-[#000000] dark:fill-[#FFFFFFCC]',
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
      gray: 'border-[#E6E6E6] bg-[#FFFFFF] text-[#000000] placeholder-[#605E5C] focus:border-[#fdd738] focus:ring-[#fdd738] dark:border-[#404040] dark:bg-[#2E2E2E] dark:text-[#FFFFFFCC] dark:placeholder-[#605E5C] dark:focus:border-[#fdd738] dark:focus:ring-[#fdd738]',
    },
    withShadow: {
      on: 'shadow-sm dark:shadow-sm-light',
      off: '',
    },
  },
  textInput: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-[#E6E6E6] bg-[#E6E6E6] px-3 text-md text-[#000000] dark:border-[#404040] dark:bg-[#404040] dark:text-[#FFFFFFCC]',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-[#605E5C] dark:text-[#605E5C]',
      },
      rightIcon: {
        base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
        svg: 'h-5 w-5 text-[#605E5C] dark:text-[#605E5C]',
      },
      input: {
        base: 'block w-full border disabled:cursor-default disabled:opacity-50',
        sizes: {
          sm: 'p-2 sm:text-sm',
          md: 'p-3 text-md',
          lg: 'p-4 sm:text-base',
        },
        colors: {
          gray: 'border-[#E6E6E6] bg-[#FFFFFF] text-[#000000] placeholder-[#605E5C] focus:border-[#fdd738] focus:ring-[#fdd738] dark:border-[#404040] dark:bg-[#2E2E2E] dark:text-[#FFFFFFCC] dark:placeholder-[#605E5C] dark:focus:border-[#fdd738] dark:focus:ring-[#fdd738]',
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
      label: 'ms-3 mt-0.5 text-start text-sm font-medium text-[#000000] dark:text-[#FFFFFFCC]',
    },
    toggle: {
      base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-0',
      checked: {
        on: 'after:translate-x-full after:border-white rtl:after:-translate-x-full',
        off: 'border-[#E6E6E6] bg-[#E6E6E6] dark:border-[#404040] dark:bg-[#404040]',
        color: {
          yellow: 'border-[#fdd738] bg-[#fdd738]',
          blue: 'border-[#051050] bg-[#051050]',
          dark: 'bg-[#2E2E2E] border-[#404040]',
          light: 'bg-[#FFFFFF] border-[#E6E6E6]',
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
      'inline-flex items-center rounded-l-md border border-r-0 border-[#E6E6E6] bg-[#E6E6E6] px-3 text-sm text-[#000000] dark:border-[#404040] dark:bg-[#404040] dark:text-[#FFFFFFCC]',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-[#605E5C] dark:text-[#605E5C]',
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
          gray: 'border-[#E6E6E6] bg-[#FFFFFF] text-[#000000] placeholder-[#605E5C] focus:border-[#fdd738] focus:ring-[#fdd738] dark:border-[#404040] dark:bg-[#2E2E2E] dark:text-[#FFFFFFCC] dark:placeholder-[#605E5C] dark:focus:border-[#fdd738] dark:focus:ring-[#fdd738]',
        },
      },
    },
  },
};
