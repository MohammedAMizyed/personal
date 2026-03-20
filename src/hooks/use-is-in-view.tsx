"use client"

import { useRef, useImperativeHandle, type Ref } from "react"
import { useInView, type UseInViewOptions } from "motion/react"

interface UseIsInViewOptions {
  inView?: boolean
  inViewOnce?: boolean
  inViewMargin?: UseInViewOptions["margin"]
}

function useIsInView<T extends HTMLElement = HTMLElement>(
  ref: Ref<T>,
  options: UseIsInViewOptions = {},
) {
  const { inView, inViewOnce = false, inViewMargin = "0px" } = options
  const localRef = useRef<T>(null)

  useImperativeHandle(ref, () => localRef.current as T)

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  })

  const isInView = !inView || inViewResult

  return { ref: localRef, isInView }
}

// eslint-disable-next-line react-refresh/only-export-components
export { useIsInView, type UseIsInViewOptions }
