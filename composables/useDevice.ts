type State = {
  isMobile?: boolean
  isTablet?: boolean
  isDesktop?: boolean
}

export const useDevice = () => useState<State>('device', () => ({}))
