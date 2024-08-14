class MazeSolver {
    constructor(ctx, maze, startX, startY, exitX, exitY) {
        this.ctx = ctx;
        this.maze = maze;
        this.currentX = startX;
        this.currentY = startY;
        this.exitX = exitX;
        this.exitY = exitY;
        this.cellSize = 30;
        this.directions = {
            up: { x: 0, y: -1 },
            right: { x: 1, y: 0 },
            down: { x: 0, y: 1 },
            left: { x: -1, y: 0 }
        };
        this.direction = 'right';
    }

    turnRight() {
        switch (this.direction) {
            case 'up': this.direction = 'right'; break;
            case 'right': this.direction = 'down'; break;
            case 'down': this.direction = 'left'; break;
            case 'left': this.direction = 'up'; break;
        }
    }

    turnLeft() {
        switch (this.direction) {
            case 'up': this.direction = 'left'; break;
            case 'right': this.direction = 'up'; break;
            case 'down': this.direction = 'right'; break;
            case 'left': this.direction = 'down'; break;
        }
    }

    moveForward() {
        this.currentX += this.directions[this.direction].x;
        this.currentY += this.directions[this.direction].y;
    }

    isWallAhead() {
        const nextX = this.currentX + this.directions[this.direction].x;
        const nextY = this.currentY + this.directions[this.direction].y;
        return this.maze[nextY][nextX] === 1;
    }

    isWallOnRight() {
        let rightDirection;
        switch (this.direction) {
            case 'up': rightDirection = 'right'; break;
            case 'right': rightDirection = 'down'; break;
            case 'down': rightDirection = 'left'; break;
            case 'left': rightDirection = 'up'; break;
        }
        const nextX = this.currentX + this.directions[rightDirection].x;
        const nextY = this.currentY + this.directions[rightDirection].y;
        return this.maze[nextY][nextX] === 1;
    }

    drawCurrentPosition() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.currentX * this.cellSize, this.currentY * this.cellSize, this.cellSize, this.cellSize);
    }

    async solve() {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        while (this.currentX !== this.exitX || this.currentY !== this.exitY) {
            if (!this.isWallOnRight()) {
                this.turnRight();
                this.moveForward();
            } else if (!this.isWallAhead()) {
                this.moveForward();
            } else {
                this.turnLeft();
            }

            drawMaze(this.ctx, this.maze, this.cellSize);
            this.drawCurrentPosition();
            await delay(100);
        }

        alert('Maze solved! 🎉');
    }
}

function generateRandomMaze(width, height) {
    const maze = Array.from({ length: height }, () => Array(width).fill(1));
    const stack = [];
    const directions = [
        { x: 0, y: -2 },
        { x: 2, y: 0 },
        { x: 0, y: 2 },
        { x: -2, y: 0 }
    ];

    const startX = Math.floor(Math.random() * (width / 2)) * 2 + 1;
    const startY = Math.floor(Math.random() * (height / 2)) * 2 + 1;
    maze[startY][startX] = 0;
    stack.push({ x: startX, y: startY });

    while (stack.length > 0) {
        const { x, y } = stack.pop();
        const validDirections = directions.filter(dir => {
            const nx = x + dir.x;
            const ny = y + dir.y;
            return (
                nx >= 1 && ny >= 1 &&
                nx < width - 1 && ny < height - 1 &&
                maze[ny][nx] === 1 &&
                maze[ny + dir.y / 2][nx + dir.x / 2] === 1
            );
        });

        if (validDirections.length > 0) {
            stack.push({ x, y });

            const { x: dx, y: dy } = validDirections[Math.floor(Math.random() * validDirections.length)];
            maze[y + dy / 2][x + dx / 2] = 0;
            maze[y + dy][x + dx] = 0;

            stack.push({ x: x + dx, y: y + dy });
        }
    }

    return maze;
}

function drawMaze(ctx, maze, cellSize) {
    const width = maze[0].length;
    const height = maze.length;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            ctx.fillStyle = maze[y][x] === 1 ? 'black' : 'white';
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

function initMaze() {
    const canvas = document.getElementById('mazeCanvas');
    const ctx = canvas.getContext('2d');
    const cellSize = 30;
    const mazeWidth = Math.floor(canvas.width / cellSize);
    const mazeHeight = Math.floor(canvas.height / cellSize);

    const maze = generateRandomMaze(mazeWidth, mazeHeight);
    const startX = 1;
    const startY = 1;
    const exitX = mazeWidth - 2;
    const exitY = mazeHeight - 2;

    drawMaze(ctx, maze, cellSize);

    const solver = new MazeSolver(ctx, maze, startX, startY, exitX, exitY);
    solver.solve();
}

initMaze();
