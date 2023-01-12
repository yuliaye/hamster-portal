import anime from 'animejs/lib/anime.es.js';
import { Ref, unref } from "vue"

type UfoAnimationContextType = {
  fullpageWidth: number
  fullpageLeft: number
  width: number
  height: number
  left: number
  top: number
  ufoCurrentIndex: number
}

export class UfoAnimation {
  ufoAnimationContext: UfoAnimationContextType = {
    fullpageWidth: 0,
    fullpageLeft: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    ufoCurrentIndex: 0
  }

  constructor(
    public animateUfoElement: Ref<HTMLElement> | HTMLElement,
    public ufoElement: Ref<HTMLElement> | HTMLElement
  ) {}

  animate(
    fromPage: { index: number, item: HTMLElement },
    toPage: { index: number, item: HTMLElement },
    direction: "up" | "down"
  ) {
    // Prevent ufo animation when is-mobile
    const isMobileRootElement = document.querySelector("html.is-mobile")
    if (isMobileRootElement) { return }

    const { ufoAnimationContext } = this
    const ufoElement = unref(this.ufoElement)
    const animateUfoElement = unref(this.animateUfoElement)

    const fromPageIndex = fromPage.index
    const toPageIndex = toPage.index
    const step = [fromPageIndex, toPageIndex].join("->")

    if (direction === "down") {
      if (ufoAnimationContext.ufoCurrentIndex >= toPageIndex) {
        return
      } else {
        ufoAnimationContext.ufoCurrentIndex = toPageIndex
      }
    }

    // Steps for scroll up
    if (step === "1->0") {
      ufoElement.classList.remove("transparent")
    }

    // Steps for scroll down
    if (step === "0->1") {
      ufoElement.classList.add("transparent")
      animateUfoElement.classList.remove("transparent")

      const { width, left, top } = ufoElement.querySelector("g").getBoundingClientRect()
      const {width: fullpageWidth, left: fullpageLeft } = animateUfoElement.parentNode.getBoundingClientRect()

      animateUfoElement.style.cssText = `top: ${top}px; left: ${left - fullpageLeft}px; width: ${width}px;`

      const { height } = animateUfoElement.getBoundingClientRect()
      Object.assign(ufoAnimationContext, { width, height, left, top, fullpageWidth, fullpageLeft })

      const toolkitElement = document.querySelector("#ufo-point--toolkit")
      const toolkitPosition = toolkitElement.getBoundingClientRect()
      const toolkitTop = toolkitElement.offsetTop

      const scale = 0.6
      const newLeft = toolkitPosition.left + toolkitPosition.width/2 - fullpageLeft - width/2
      const baseTop = toPageIndex * window.innerHeight
      const newTop = baseTop + toolkitTop - height

      anime({
        targets: animateUfoElement,
        scale: scale,
        left: newLeft,
        top: newTop,
        easing: 'easeInOutQuad',
        duration: 600,
      })
    }

    if (step === "1->2") {
      const { fullpageWidth, fullpageLeft, width } = ufoAnimationContext
      const baseTop = toPageIndex * window.innerHeight
      const scale = 0.6
      const newLeft = fullpageWidth/2 - scale*width

      anime({
        targets: animateUfoElement,
        scale: scale,
        top: baseTop + 50,
        left: newLeft,
        rotate: 50,
        easing: 'easeInOutSine',
        duration: 400,
      })

      anime({
        targets: animateUfoElement.querySelector("#ufo-light-image"),
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 1500,
      })
    }

    // if (step === "2->3") {
    //   const { fullpageWidth, width } = ufoAnimationContext
    //   const baseTop = toPageIndex * window.innerHeight
    //   const scale = 0.3

    //   animateUfoElement.querySelector<HTMLElement>("#ufo-light-image").classList.add("force-transparent")

    //   anime({
    //     targets: animateUfoElement,
    //     left: fullpageWidth,
    //     scale: scale,
    //     top: baseTop + 50,
    //     opacity: 0,
    //     easing: 'easeInOutSine',
    //     duration: 500,
    //   })
    // }

    if (step === "2->3") {
      animateUfoElement.querySelector<HTMLElement>("#ufo-light-image").classList.add("force-transparent")

      const titleElement = document.querySelector("#ufo-point--news-title")
      const titlePosition = titleElement.getBoundingClientRect()
      const titleTop = titleElement.offsetTop

      const { fullpageLeft, height } = ufoAnimationContext
      const baseTop = toPageIndex * window.innerHeight
      const newTop = baseTop + titleTop + titlePosition.height/2 - height/2
      const scale = 0.3

      anime({
        targets: animateUfoElement,
        left: titlePosition.width - fullpageLeft/2,
        scale: scale,
        top: newTop,
        opacity: 1,
        rotate: 0,
        easing: 'easeInOutSine',
        duration: 500,
      })
    }

    if (step === "3->4") {
      animateUfoElement.style.zIndex = "10"

      const { fullpageWidth, fullpageLeft, width } = ufoAnimationContext
      const pageTop = toPage.item.offsetTop
      const newLeft = fullpageWidth/2 - fullpageLeft/2

      anime({
        targets: animateUfoElement,
        scale: 0.2,
        top: pageTop + 100,
        left: newLeft,
        duration: 500,
        easing: 'easeInOutQuad',
      })
    }
  }
}
