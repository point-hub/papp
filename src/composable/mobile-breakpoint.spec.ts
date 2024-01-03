import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useMobileBreakpoint } from './mobile-breakpoint'

describe('mobile breakpoint', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('defined', () => {
    const { isMobile } = useMobileBreakpoint()
    expect(isMobile).toBeDefined()
  })
})
