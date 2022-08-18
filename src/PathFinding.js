module.exports = {
    'Heap': require('heap'),
    'Node': require('./core/Node'),
    'Grid': require('./core/Grid'),
    'Util': require('./core/Util'),
    'DiagonalMovement': require('./core/DiagonalMovement'),
    'Heuristic': require('./core/Heuristic'),
    'AStarFinder': require('./finders/AStarFinder'),
    'BestFirstFinder': require('./finders/BestFirstFinder'),
    'CLAFinder': require('./finders/CLAFinder'),
    'BreadthFirstFinder': require('./finders/BreadthFirstFinder'),
    'DijkstraFinder': require('./finders/DijkstraFinder'),
    'BiAStarFinder': require('./finders/BiAStarFinder'),
    'BiBestFirstFinder': require('./finders/BiBestFirstFinder'),
    'BiBreadthFirstFinder': require('./finders/BiBreadthFirstFinder'),
    'BiDijkstraFinder': require('./finders/BiDijkstraFinder'),
    'IDAStarFinder': require('./finders/IDAStarFinder'),
    'JumpPointFinder': require('./finders/JumpPointFinder'),
    'RandomMaze':require('./mazes/RandomMaze'),
    'RecDivMaze':require('./mazes/RecursiveDivisionMaze'),
    'StairMaze':require('./mazes/StairMaze'),
    'TSP':require('./finders/TSP')
};