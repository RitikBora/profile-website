import CircleBounce from "./CircleBounce"
import MovingSquares from "./MovingSquares"
import SpinningSquare from "./SpinningSquare"
import SpinningTriangles from "./SpinningTriangles"

export const Animations = () =>
{
    return (
        <div>
            <CircleBounce/>
            <SpinningTriangles/>
            <SpinningSquare/>
            <MovingSquares/>
        </div>
    )
}