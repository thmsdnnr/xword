/* This file contains tests for ../lib/edit.js
Currently the four reflection functions (about horizontal line, vetical line, y=x and y=-x diagonals)
*/
var expect = require("chai").expect;
var board = require("../lib/board");
var edit = require("../lib/edit");

  describe("reflectPointHorizontal", function() {
    describe("Handles bad input with proper errors", function() {
      it("throws an error if the board is not of odd length", function() {
        var newBoard=board.createEmptyBoard(4);
        expect(()=>edit.reflectPointHorizontal(0, 0, newBoard).to.throw('Boards must be an odd length to reflect points symmetrically.'));
      });
      it("does not throw an error if the board is of odd length", function() {
        var newBoard=board.createEmptyBoard(5);
        expect(()=>edit.reflectPointHorizontal(0, 0, newBoard).notToThrow('Boards must be an odd length to reflect points symmetrically.'));
      });
      it("throws an error if the point given does not exist on the board (indices too low by one)", function() {
        var newBoard=board.createEmptyBoard(5);
        expect(()=>edit.reflectPointHorizontal(-1, -1, newBoard).to.throw('The point given does not exist on the board.'));
      });
      it("throws an error if the point given does not exist on the board (indices too high by one)", function() {
        var newBoard=board.createEmptyBoard(5);
        expect(()=>edit.reflectPointHorizontal(5, 5, newBoard).to.throw('The point given does not exist on the board.'));
      });
    });
    describe("Returns correct reflected point", function() {
      it ("returns reflected point with maximum X deflection (left to right)", function() {
        var newBoard=board.createEmptyBoard(5);
        var reflected=edit.reflectPointHorizontal(0, 0, newBoard);
        expect(reflected).to.eql([4,0]);
      });
    it ("returns reflected point with maximum X deflection (right to left)", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointHorizontal(4, 4, newBoard);
      expect(reflected).to.eql([0,4]);
  });
    it ("returns reflected point with middle amount of X deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointHorizontal(3, 3, newBoard);
      expect(reflected).to.eql([1,3]);
  });
    it ("returns reflected point with middle amount of X deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointHorizontal(1, 1, newBoard);
      expect(reflected).to.eql([3,1]);
    });
    it ("returns reflected point with no X deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointHorizontal(2, 2, newBoard);
      expect(reflected).to.eql([2,2]);
    });
  });
});

describe("reflectPointVertical", function() {
  describe("Handles bad input with proper errors", function() {
    it("throws an error if the board is not of odd length", function() {
      var newBoard=board.createEmptyBoard(4);
      expect(()=>edit.reflectPointVertical(0, 0, newBoard).to.throw('Boards must be an odd length to reflect points symmetrically.'));
    });
    it("does not throw an error if the board is of odd length", function() {
      var newBoard=board.createEmptyBoard(5);
      expect(()=>edit.reflectPointVertical(0, 0, newBoard).notToThrow('Boards must be an odd length to reflect points symmetrically.'));
    });
    it("throws an error if the point given does not exist on the board (indices too low by one)", function() {
      var newBoard=board.createEmptyBoard(5);
      expect(()=>edit.reflectPointVertical(-1, -1, newBoard).to.throw('The point given does not exist on the board.'));
    });
    it("throws an error if the point given does not exist on the board (indices too high by one)", function() {
      var newBoard=board.createEmptyBoard(5);
      expect(()=>edit.reflectPointVertical(5, 5, newBoard).to.throw('The point given does not exist on the board.'));
    });
  });

  describe("Returns correct reflected point", function() {
    it ("returns reflected point with maximum Y deflection (bottom to top)", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointVertical(0, 0, newBoard);
      expect(reflected).to.eql([0,4]);
    });
    it ("returns reflected point with maximum X deflection (top to bottom)", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointVertical(4, 4, newBoard);
      expect(reflected).to.eql([4,0]);
    });
    it ("returns reflected point with middle amount of Y deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointVertical(3, 3, newBoard);
      expect(reflected).to.eql([3,1]);
    });
    it ("returns reflected point with middle amount of Y deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointVertical(1, 1, newBoard);
      expect(reflected).to.eql([1,3]);
    });
    it ("returns reflected point with no Y deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointVertical(2, 2, newBoard);
      expect(reflected).to.eql([2,2]);
    });
  });
});

  describe("reflectPointAboutDiagonalUp", function() {
    describe("Handles bad input with proper errors", function() {
      it("throws an error if the board is not of odd length", function() {
        var newBoard=board.createEmptyBoard(4);
        expect(()=>edit.reflectPointAboutDiagonalUp(0, 0, newBoard).to.throw('Boards must be an odd length to reflect points symmetrically.'));
      });
      it("does not throw an error if the board is of odd length", function() {
        var newBoard=board.createEmptyBoard(5);
        expect(()=>edit.reflectPointAboutDiagonalUp(0, 0, newBoard).notToThrow('Boards must be an odd length to reflect points symmetrically.'));
      });
      it("throws an error if the point given does not exist on the board (indices too low by one)", function() {
        var newBoard=board.createEmptyBoard(5);
        expect(()=>edit.reflectPointAboutDiagonalUp(-1, -1, newBoard).to.throw('The point given does not exist on the board.'));
      });
      it("throws an error if the point given does not exist on the board (indices too high by one)", function() {
        var newBoard=board.createEmptyBoard(5);
        expect(()=>edit.reflectPointAboutDiagonalUp(5, 5, newBoard).to.throw('The point given does not exist on the board.'));
      });
    });
    describe("Returns correct reflected point", function() {
      it ("returns reflected point with maximum X-Y deflection (bottom to top)", function() {
        var newBoard=board.createEmptyBoard(5);
        var reflected=edit.reflectPointAboutDiagonalUp(0, 0, newBoard);
        expect(reflected).to.eql([4,4]);
    });
    it ("returns reflected point with maximum X-Y deflection (top to bottom)", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointAboutDiagonalUp(4, 4, newBoard);
      expect(reflected).to.eql([0,0]);
    });
    it ("returns reflected point with middle amount of X-Y deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointAboutDiagonalUp(3, 3, newBoard);
      expect(reflected).to.eql([1,1]);
    });
    it ("returns reflected point with middle amount of X-Y deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointAboutDiagonalUp(1, 1, newBoard);
      expect(reflected).to.eql([3,3]);
    });
    it ("returns reflected point with no X-Y deflection", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointAboutDiagonalUp(2, 2, newBoard);
      expect(reflected).to.eql([2,2]);
    });
  });
});

describe("reflectPointAboutDiagonalDown", function() {
  describe("Handles bad input with proper errors", function() {
    it("throws an error if the board is not of odd length", function() {
      var newBoard=board.createEmptyBoard(4);
      expect(()=>edit.reflectPointAboutDiagonalDown(0, 0, newBoard).to.throw('Boards must be an odd length to reflect points symmetrically.'));
    });
    it("does not throw an error if the board is of odd length", function() {
      var newBoard=board.createEmptyBoard(5);
      expect(()=>edit.reflectPointAboutDiagonalDown(0, 0, newBoard).notToThrow('Boards must be an odd length to reflect points symmetrically.'));
    });
    it("throws an error if the point given does not exist on the board (indices too low by one)", function() {
      var newBoard=board.createEmptyBoard(5);
      expect(()=>edit.reflectPointAboutDiagonalDown(-1, -1, newBoard).to.throw('The point given does not exist on the board.'));
    });
    it("throws an error if the point given does not exist on the board (indices too high by one)", function() {
      var newBoard=board.createEmptyBoard(5);
      expect(()=>edit.reflectPointAboutDiagonalDown(5, 5, newBoard).to.throw('The point given does not exist on the board.'));
    });
  });
  describe("Returns correct reflected point", function() {
    it ("returns reflected point with maximum X-Y deflection (bottom to top)", function() {
      var newBoard=board.createEmptyBoard(5);
      var reflected=edit.reflectPointAboutDiagonalDown(0, 0, newBoard);
      expect(reflected).to.eql([0,0]);
  });
  it ("returns reflected point with maximum X-Y deflection (top to bottom)", function() {
    var newBoard=board.createEmptyBoard(5);
    var reflected=edit.reflectPointAboutDiagonalDown(4, 4, newBoard);
    expect(reflected).to.eql([4,4]);
  });
  it ("returns reflected point with middle amount of X-Y deflection", function() {
    var newBoard=board.createEmptyBoard(5);
    var reflected=edit.reflectPointAboutDiagonalDown(1, 4, newBoard);
    expect(reflected).to.eql([4,1]);
  });
  it ("returns reflected point with middle amount of X-Y deflection", function() {
    var newBoard=board.createEmptyBoard(5);
    var reflected=edit.reflectPointAboutDiagonalDown(2, 4, newBoard);
    expect(reflected).to.eql([4,2]);
  });
  it ("returns reflected point with no X-Y deflection", function() {
    var newBoard=board.createEmptyBoard(5);
    var reflected=edit.reflectPointAboutDiagonalDown(2, 2, newBoard);
    expect(reflected).to.eql([2,2]);
    });
  });
});
