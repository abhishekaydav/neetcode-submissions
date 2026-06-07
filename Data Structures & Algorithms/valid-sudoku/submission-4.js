class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = [];
        const cols = [];
        const boxes = [];


        for(let i=0; i<9; i++){
            rows.push(new Set());
            cols.push(new Set())
            boxes.push(new Set())
        }

        for(let r =0; r<9; r++){
            for(let c = 0; c<9; c++){
                let val = board[r][c];

                if(val === "."){
                    continue
                }

                const boardIndex = Math.floor(r/3)*3 + Math.floor(c/3)

                if(rows[r].has(val)||cols[c].has(val) || boxes[boardIndex].has(val)){
                    return false
                }

                rows[r].add(val)
                cols[c].add(val)
                boxes[boardIndex].add(val)
            }
        }

        return true
    }
}
