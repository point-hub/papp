import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useScreenBreakpointStore } from './screen-breakpoint'

describe('screen breakpoint store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('defined', () => {
    const screenBreakpoint = useScreenBreakpointStore()
    expect(screenBreakpoint.$state.windowWidth).toBeDefined()
    expect(screenBreakpoint.$state.windowHeight).toBeDefined()
    expect(screenBreakpoint.$state.screenBreakpoint).toBeDefined()
    expect(screenBreakpoint.onResizeWindow).toBeDefined()
  })
})
