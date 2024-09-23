"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const initialBoard = [
  [5, 3, "", "", 7, "", "", "", ""],
  [6, "", "", 1, 9, 5, "", "", ""],
  ["", 9, 8, "", "", "", "", 6, ""],
  [8, "", "", "", 6, "", "", "", 3],
  [4, "", "", 8, "", 3, "", "", 1],
  [7, "", "", "", 2, "", "", "", 6],
  ["", 6, "", "", "", "", 2, 8, ""],
  ["", "", "", 4, 1, 9, "", "", 5],
  ["", "", "", "", 8, "", "", 7, 9],
];

const Sudoku = () => {
  const [board, setBoard] = useState(initialBoard);

  // Handle input changes
  const handleInputChange = (e, rowIndex, colIndex) => {
    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = e.target.value;
    setBoard(newBoard);
  };

  // Sudoku validation logic
  const isValidSudoku = () => {
    const isValid = validateSudoku(board);
    if (isValid) {
      toast.success("Congratulations! The Sudoku is valid.");
    } else {
      toast.error("Oops! The Sudoku is invalid.");
    }
  };

  const validateSudoku = (board) => {
    // Basic validation: Ensure rows, columns, and 3x3 boxes don't have duplicates
    const isValidSet = (arr) => {
      const filtered = arr.filter((num) => num !== "" && !isNaN(num));
      return filtered.length === new Set(filtered).size;
    };

    // Check rows
    for (let i = 0; i < 9; i++) {
      if (!isValidSet(board[i])) return false;
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
      const col = board.map((row) => row[i]);
      if (!isValidSet(col)) return false;
    }

    // Check 3x3 grids
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const grid = [];
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            grid.push(board[i + x][j + y]);
          }
        }
        if (!isValidSet(grid)) return false;
      }
    }

    return true;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    toast("Game reset.");
  };

  return (
    <>
      <div className="text-start mt-14">
        <h1 className="text-xl mb-2 font-bold text-title">Let's play</h1>
        <h1 className="text-4xl mb-5 font-bold text-primaryColor">
          Sudoku Game
        </h1>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="grid grid-cols-7 md:grid-cols-9 gap-1">
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                value={cell}
                onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                className="w-10 h-10 text-center text-title border-none focus:outline-none bg-card custom-bg"
                maxLength={1}
              />
            ))
          )}
        </div>
        <div className="mt-5 flex items-center gap-4">
          <button
            className=" bg-card text-primaryColor custom-bg px-4 py-2 rounded"
            onClick={isValidSudoku}
          >
            Validate
          </button>
          <button
            className="bg-card text-red-500 custom-bg px-4 py-2 rounded"
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
      </div>
      <p className="text-center mt-10 text-sm font-semibold text-foreground italic">
        Built with Next.js and Tailwind
      </p>
    </>
  );
};

export default Sudoku;
