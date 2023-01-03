// FYI: how to detect user device and load UI accordingly in Nuxt3
// https://stackoverflow.com/questions/72749827/how-to-detect-user-device-and-load-ui-accordingly-in-nuxt3

import {defineNuxtPlugin, useRequestHeaders} from '#app';
import MobileDetect from 'mobile-detect';

export default defineNuxtPlugin(() => {
    const headers = useRequestHeaders()
    const device = useDevice()

    const md = process.server ? new MobileDetect(headers['user-agent']) : new MobileDetect(navigator.userAgent)
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
    const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
    const isDesktop = !isMobile && !isTablet

    const deviceData = { isMobile, isTablet, isDesktop }

    device.value = deviceData

    return {
        provide: { device: deviceData }
    };
})
