const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none outline-none",
  {
    variants: {
      variant: {
        default:
          "[--liquid-button-background-color:#000] [--liquid-button-color:#000] text-white hover:text-white",

        secondary:
          "[--liquid-button-background-color:#e5e5e5] [--liquid-button-color:#000] text-black hover:text-black",

        ghost:
          "[--liquid-button-background-color:transparent] [--liquid-button-color:#000] text-black hover:text-white",

        destructive:
          "[--liquid-button-background-color:#dc2626] [--liquid-button-color:#dc2626] text-white",
      },

      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
