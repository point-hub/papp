export interface IEvent {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (payload?: any) => void
}

export class EventEmitter {
  private events: IEvent[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public emit(name: string, payload: any) {
    const ev = this.events.filter((item) => item.name == name)
    for (const item of ev) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      item.callback && item.callback(payload)
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public on(name: string, callback: (payload?: any) => void) {
    this.events.push({ name, callback })
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public remove(name: string, callback: (payload?: any) => void) {
    let index = -1
    const isValidEvent = this.events.some((item, idx) => {
      index = idx
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      item.name === name && callback == item.callback
    })

    if (isValidEvent && index > -1) {
      this.events.splice(index, 1)
    }
  }

  public clear(name: string) {
    const l = this.events.length - 1
    for (let i = l; i >= 0; i--) {
      const event = this.events[i]
      if (event.name == name) {
        this.events.splice(i, 1)
      }
    }
  }
}

export const emitter = new EventEmitter()
