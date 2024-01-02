import { describe, beforeEach, expect, it } from 'vitest'
import { useMobileBreakpoint } from './mobile-breakpoint'
import { setActivePinia, createPinia } from 'pinia'

describe('mobile breakpoint', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('defined', () => {
    const { isMobile } = useMobileBreakpoint()
    expect(isMobile).toBeDefined()
  })
})
