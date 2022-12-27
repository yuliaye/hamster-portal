import anime from 'animejs/lib/anime.es.js';

const ufoAnimationContext: {
  fullpageWidth: number
  fullpageLeft: number
  width: number
  height: number
  left: number
  top: number
  ufoCurrentIndex: number
} = { fullpageWidth: 0, fullpageLeft: 0, width: 0, height: 0, left: 0, top: 0, ufoCurrentIndex: 0 }

export function handleUfoAnimate(
  animateUfoElement: HTMLElement,
  ufoElement: HTMLElement,
  fromPage: { index: number, item: HTMLElement },
  toPage: { index: number, item: HTMLElement },
  direction: "up" | "down"
) {
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

    const scale = 0.6
    const newLeft = (fullpageWidth- width*scale)/2
    const baseTop = toPageIndex * window.innerHeight

    Object.assign(ufoAnimationContext, { width, height, left, top, fullpageWidth, fullpageLeft })

    anime({
      targets: animateUfoElement,
      scale: scale,
      left: newLeft - fullpageLeft,
      top: baseTop + 20,
      easing: 'easeInOutSine',
      duration: 600,
    })
  }

  if (step === "1->2") {
    const { fullpageWidth, width } = ufoAnimationContext
    const baseTop = toPageIndex * window.innerHeight
    const scale = 0.8

    anime({
      targets: animateUfoElement,
      scale: scale,
      top: baseTop + 50,
      rotate: 45,
      easing: 'easeInOutSine',
      duration: 500,
    })

    anime({
      targets: animateUfoElement.querySelector("#ufo-light-image"),
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 1500,
    })
  }

  if (step === "2->3") {
    const { fullpageWidth, width } = ufoAnimationContext
    const baseTop = toPageIndex * window.innerHeight
    const scale = 0.3

    animateUfoElement.querySelector<HTMLElement>("#ufo-light-image").style.opacity = "0"

    anime({
      targets: animateUfoElement,
      left: fullpageWidth,
      scale: scale,
      top: baseTop + 50,
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 500,
    })
  }

  if (step === "3->4") {
    animateUfoElement.querySelector<HTMLElement>("#ufo-light-image").style.opacity = "0"

    const titleElement = document.querySelector("#newsTitle")
    const titlePosition = titleElement.getBoundingClientRect()
    const titleTop = titleElement.offsetTop

    const { fullpageLeft, height } = ufoAnimationContext
    const baseTop = toPageIndex * window.innerHeight
    const newTop = baseTop + titleTop + titlePosition.height - height*0.3 - 50

    anime({
      targets: animateUfoElement,
      left: titlePosition.width - fullpageLeft,
      top: newTop,
      opacity: 1,
      rotate: 0,
      easing: 'easeInOutSine',
      duration: 500,
    })
  }

  if (step === "4->5") {
    animateUfoElement.style.zIndex = "100"

    const { fullpageWidth, fullpageLeft, width } = ufoAnimationContext
    const pageTop = toPage.item.offsetTop
    const newLeft = fullpageWidth/2 - fullpageLeft/2

    anime({
      targets: animateUfoElement,
      keyframes: [
        {scale: 0.6, duration: 300},
        {scale: 0.2, duration: 300},
        {
          top: pageTop + 100,
          left: newLeft,
          duration: 500,
        }
      ],
      easing: 'easeInOutSine',
    })
  }
}
