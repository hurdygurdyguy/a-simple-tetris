
document.addEventListener('DOMContentLoaded', () => {
    const width = 10
    const grid = document.querySelector('.grid')
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('start-btn')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    
    const lTetromino = [
        [1, width+1,width*2 + 1, 2], //Primera rotacion de "L"
        [width, width + 1,width + 2, width*2 + 2],
        [1, width + 1,width*2 + 1, width*2],
        [width, width*2 ,width*2 + 1, width*2 + 2],
    ] 

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]  

    const theTetrominoes = [lTetromino, oTetromino]

    let currentPosition = 4
    let currentRotation = 0 // esto debe cambiarlo el jugador con algun boton

    let random = Math.floor(Math.random()*theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation] //Primera rotacion de tetromino "L" dentro del array

    //Draw the tetromino
    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add("tetromino")
        })
    }

    function undraw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove("tetromino")
        })
    }

    timerID = setInterval(moveDown, 1000)

    function moveDown(){
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    function freeze(){
        if( current.some(index => 
            squares[currentPosition + index + width].classList.contains("taken"))
        ){
            current.forEach(index => squares[currentPosition + index].classList.add("taken"))
            random = Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }
})