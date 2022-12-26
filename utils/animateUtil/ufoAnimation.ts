import anime from 'animejs/lib/anime.es.js';

const ufoAnimationContext: {
  documentWidth: number
  width: number
  left: number
  top: number
} = {documentWidth: 0, width: 0, left: 0, top: 0}

export function handleUfoAnimate(
  animateUfoElement: HTMLElement,
  ufoElement: HTMLElement,
  fromPageIndex: number,
  toPageIndex:number
) {
  const step = [fromPageIndex, toPageIndex].join("->")

  if (step === "0->1") {
    ufoElement.classList.add("opacity-0")

    animateUfoElement.classList.remove("hidden")

    const { width, left, top } = ufoElement.querySelector("g").getBoundingClientRect()
    animateUfoElement.style.cssText = `top: ${top}px; left: ${left}px; width: ${width}px;`

    const {width: documentWidth} = animateUfoElement.parentNode.getBoundingClientRect()
    const scale = 0.6
    const newLeft = (documentWidth- width*scale)/2

    Object.assign(ufoAnimationContext, { width, left, top, documentWidth })

    anime({
      targets: animateUfoElement,
      left: newLeft,
      scale: scale,
      top: "20px",
      easing: 'easeInOutSine',
      duration: 600,
    })
  }

  if (step === "1->2") {
    const { documentWidth, width } = ufoAnimationContext
    const scale = 0.8

    anime({
      targets: animateUfoElement,
      scale: scale,
      top: "50px",
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
    const { documentWidth, width } = ufoAnimationContext
    const scale = 0.3

    animateUfoElement.querySelector<HTMLElement>("#ufo-light-image").style.opacity = "0"

    anime({
      targets: animateUfoElement,
      left: documentWidth,
      scale: scale,
      top: "50px",
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 500,
    })
  }

  if (step === "3->4") {
    animateUfoElement.querySelector<HTMLElement>("#ufo-light-image").style.opacity = "0"
    
    anime({
      targets: animateUfoElement,
      left: 450,
      top: "100px",
      opacity: 1,
      rotate: 0,
      easing: 'easeInOutSine',
      duration: 500,
    })
  }

  if (step === "4->5") {
    animateUfoElement.style.zIndex = "100"

    const { documentWidth, width } = ufoAnimationContext
    const newLeft = documentWidth/2

    anime({
      targets: animateUfoElement,
      keyframes: [
        {scale: 0.6, duration: 300},
        {scale: 0.2, duration: 300},
        {
          top: 200,
          left: newLeft,
          duration: 500,
        }
      ],
      easing: 'easeInOutSine',
    })
  }
}
