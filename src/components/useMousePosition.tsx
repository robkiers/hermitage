import { useEffect, useState } from 'react'
import { fromEvent } from 'rxjs'
import { map, throttleTime } from "rxjs/operators";

function useMousePosition(delay = 10) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const sub = fromEvent<MouseEvent>(document, "mousemove")
      .pipe(
        throttleTime(delay),
        map((event: MouseEvent) => [event.clientX, event.clientY])
      )
      .subscribe(([newX, newY]) => {
        setX(newX)
        setY(newY)
      })

    return () => {
      sub.unsubscribe()
    }
  }, [])

  return {
    mouseX: x,
    mouseY: y,
  }
}
export default useMousePosition;
