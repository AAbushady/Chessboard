/*
Write a program that creates a string that represents an 8x8 grid, using new-line
characters to seperate lines. At each position of the grid there is either a space or
a # character. The characters should form a chessboard. Passing the string to 
console.log should show this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

After making this pattern, define a binding size = 8 and change the program so that it works
for any size, out-putting a grid of the given width and height.
*/

// Constants and Variables.
// Set row to set the grid up.
const row = 8;
// col will = row so grid is always NxN.
const col = row;
// Sets up the chessboard.
var chessboard = "";

// This iteration of the for loop handles the rows and the new-lines.
for (var cnt1 = 0; cnt1 < row; cnt1++) {
    // This iteration handles the columns and decides whether it is a # or a " ".
    for (var cnt2 = 0; cnt2 < col; cnt2++) {
        if ((cnt1 + cnt2) % 2 == 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}

// Output the chessboard.
console.log(chessboard);
