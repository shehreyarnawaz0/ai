// Artificial Intelligence - Mid Term - Top 100 MCQs
const quizData = [
  {
    "id": 1,
    "week": "Week 1 - Introduction to AI & Paradigms",
    "question": "The \"acting rationally\" approach focuses on:",
    "options": {
      "A": "Doing the right thing to achieve the best expected outcome",
      "B": "Only passing the Turing Test",
      "C": "Copying human behaviour exactly",
      "D": "Only using formal logic"
    },
    "answer": "A"
  },
  {
    "id": 2,
    "week": "Week 1 - Introduction to AI & Paradigms",
    "question": "Why did AI methods based on probability and data overtake pure rule-based methods in many areas?",
    "options": {
      "A": "Probability does not need any computation",
      "B": "Rules are impossible to write in any programming language",
      "C": "Real-world data is noisy and uncertain, and rules alone cannot cover it",
      "D": "Data-driven methods need no data"
    },
    "answer": "C"
  },
  {
    "id": 3,
    "week": "Week 1 - Introduction to AI & Paradigms",
    "question": "Big data helps modern AI mainly by:",
    "options": {
      "A": "Replacing algorithms completely",
      "B": "Providing many examples for learning algorithms",
      "C": "Reducing the need for computers",
      "D": "Making rules unnecessary for all tasks"
    },
    "answer": "B"
  },
  {
    "id": 4,
    "week": "Week 1 - Introduction to AI & Paradigms",
    "question": "Which system is an example of data-driven AI?",
    "options": {
      "A": "A hand-coded rule set for tax calculation",
      "B": "A fixed decision flowchart written by an engineer",
      "C": "A truth-table based logic checker",
      "D": "A spam filter trained on labelled emails"
    },
    "answer": "D"
  },
  {
    "id": 5,
    "week": "Week 1 - Introduction to AI & Paradigms",
    "question": "ELIZA, an early chatbot, was created by:",
    "options": {
      "A": "Demis Hassabis",
      "B": "Joseph Weizenbaum",
      "C": "Alan Turing",
      "D": "Geoffrey Hinton"
    },
    "answer": "B"
  },
  {
    "id": 6,
    "week": "Week 1 - Introduction to AI & Paradigms",
    "question": "Which was a main cause of the early AI winters?",
    "options": {
      "A": "Overhyped promises combined with limited computing power",
      "B": "Too much available training data",
      "C": "Too many AI researchers",
      "D": "Cheap and powerful GPUs"
    },
    "answer": "A"
  },
  {
    "id": 7,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "The agent function maps:",
    "options": {
      "A": "Percept sequences to actions",
      "B": "Environments to sensors",
      "C": "Goals to utilities",
      "D": "Actions to percepts"
    },
    "answer": "A"
  },
  {
    "id": 8,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "A key challenge of LLM-based agents is:",
    "options": {
      "A": "Hallucination and unreliable multi-step reasoning",
      "B": "They have no inputs",
      "C": "They need no compute",
      "D": "They cannot read text"
    },
    "answer": "A"
  },
  {
    "id": 9,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "Which statement about agent environments is TRUE?",
    "options": {
      "A": "Environments never change classification",
      "B": "The same task can be modelled with different environment properties depending on assumptions",
      "C": "Agents and environments are the same thing",
      "D": "All environments are fully observable"
    },
    "answer": "B"
  },
  {
    "id": 10,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "In a learning agent, the \"problem generator\" is responsible for:",
    "options": {
      "A": "Suggesting exploratory actions to gain new experience",
      "B": "Evaluating performance",
      "C": "Executing actions",
      "D": "Storing rules"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "Which agent type is best when there are multiple conflicting goals or trade-offs?",
    "options": {
      "A": "Utility-based agent",
      "B": "Random agent",
      "C": "Simple reflex agent",
      "D": "Table-driven agent"
    },
    "answer": "A"
  },
  {
    "id": 12,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "Chess (without a clock) is typically classified as:",
    "options": {
      "A": "Partially observable, deterministic, continuous",
      "B": "Partially observable, stochastic, continuous",
      "C": "Fully observable, stochastic, continuous",
      "D": "Fully observable, deterministic, discrete"
    },
    "answer": "D"
  },
  {
    "id": 13,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "In LLM-based agents, \"memory\" is used to:",
    "options": {
      "A": "Replace the model",
      "B": "Cool the processor",
      "C": "Store past context and information for later steps",
      "D": "Draw the environment"
    },
    "answer": "C"
  },
  {
    "id": 14,
    "week": "Week 2 - Intelligent Agents & the PEAS Framework",
    "question": "Poker is typically classified as:",
    "options": {
      "A": "Partially observable and stochastic",
      "B": "Fully observable and deterministic",
      "C": "Partially observable and deterministic",
      "D": "Fully observable and stochastic"
    },
    "answer": "A"
  },
  {
    "id": 15,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Roads (one-way, minutes): S->E 4, S->F 4, B->D 1, C->D 6, C->G 6, D->G 1, E->B 4, E->C 3, E->D 3, F->E 5, F->G 5. Use graph search; a junction is never expanded twice; test the goal when a junction is expanded; ties are broken alphabetically. In what order does Uniform Cost Search (UCS) expand junctions from S to G (including S and G), and what is the cost of the route it returns?",
    "options": {
      "A": "S, E, F, B, C, D, G (cost 9)",
      "B": "S, E, B, D, G (cost 10)",
      "C": "S, E, F, C, D, B, G (cost 8)",
      "D": "S, E, B, D, G (cost 8)"
    },
    "answer": "C"
  },
  {
    "id": 16,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Directed roads (costs ignored): S->D, S->F, C->G, D->C, D->E, D->G, E->C, F->E, F->G. BFS starts at S and seeks G, takes neighbours alphabetically, never queues a node twice, and tests the goal when a node is taken off the queue. How many nodes are taken off the queue before G itself, and which path does BFS return?",
    "options": {
      "A": "6 nodes; S-D-G",
      "B": "5 nodes; S-D-G",
      "C": "3 nodes; S-D-C-G",
      "D": "4 nodes; S-D-G"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Roads (one-way, minutes): S->D 5, S->E 1, S->F 2, C->D 3, C->G 1, D->G 5, E->D 4, E->G 2, F->C 4, F->D 5. Use graph search; a junction is never expanded twice; test the goal when a junction is expanded; ties are broken alphabetically. In what order does Uniform Cost Search (UCS) expand junctions from S to G (including S and G), and what is the cost of the route it returns?",
    "options": {
      "A": "S, E, F, G (cost 3)",
      "B": "S, E, G (cost 3)",
      "C": "S, D, E, F, G (cost 10)",
      "D": "S, D, G (cost 10)"
    },
    "answer": "A"
  },
  {
    "id": 18,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Tree: R has children A, B; A has child C; B has children D, E; C has children F, H; D has child I; E has children J, G. The goal is G. DLS visits children left to right and tests each node when it is visited. What does DLS return with limit 2, and how many nodes does it visit (R included, G included) with limit 3 before finding G?",
    "options": {
      "A": "cutoff; 11 nodes",
      "B": "cutoff; 10 nodes",
      "C": "failure; 11 nodes",
      "D": "cutoff; 13 nodes"
    },
    "answer": "A"
  },
  {
    "id": 19,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Roads (one-way, minutes): S->A 1, S->C 3, S->E 1, A->F 3, A->G 1, C->A 2, C->F 3, D->A 6, E->D 2, E->F 4, F->G 1. Use graph search; a junction is never expanded twice; test the goal when a junction is expanded; ties are broken alphabetically. In what order does Uniform Cost Search (UCS) expand junctions from S to G (including S and G), and what is the cost of the route it returns?",
    "options": {
      "A": "S, A, E, G (cost 2)",
      "B": "S, A, G (cost 2)",
      "C": "S, A, F, G (cost 2)",
      "D": "S, A, F, G (cost 5)"
    },
    "answer": "A"
  },
  {
    "id": 20,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Directed roads (costs ignored): S->C, S->E, S->F, B->G, C->B, C->G, E->C, E->G, F->B, F->E. BFS starts at S and seeks G, takes neighbours alphabetically, never queues a node twice, and tests the goal when a node is taken off the queue. How many nodes are taken off the queue before G itself, and which path does BFS return?",
    "options": {
      "A": "3 nodes; S-C-B-G",
      "B": "4 nodes; S-C-G",
      "C": "7 nodes; S-C-G",
      "D": "5 nodes; S-C-G"
    },
    "answer": "D"
  },
  {
    "id": 21,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Tree: R has children A, B; A has child G; B has children D, E; G has child F; E has child H. The goal is G. DLS visits children left to right and tests each node when it is visited. What does DLS return with limit 1, and how many nodes does it visit (R included, G included) with limit 2 before finding G?",
    "options": {
      "A": "cutoff; 3 nodes",
      "B": "cutoff; 2 nodes",
      "C": "failure; 3 nodes",
      "D": "cutoff; 4 nodes"
    },
    "answer": "A"
  },
  {
    "id": 22,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Directed roads (costs ignored): S->A, S->B, S->E, A->G, B->A, B->D, D->A, D->G, E->D, E->G. BFS starts at S and seeks G, takes neighbours alphabetically, never queues a node twice, and tests the goal when a node is taken off the queue. How many nodes are taken off the queue before G itself, and which path does BFS return?",
    "options": {
      "A": "6 nodes; S-A-G",
      "B": "4 nodes; S-A-G",
      "C": "3 nodes; S-A-G",
      "D": "5 nodes; S-A-G"
    },
    "answer": "B"
  },
  {
    "id": 23,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Roads (one-way, minutes): S->D 6, S->E 3, S->F 4, A->B 3, B->C 1, B->G 6, C->G 3, D->B 4, E->B 2, E->F 6, E->G 2, F->A 6, F->B 2, F->C 5. Use graph search; a junction is never expanded twice; test the goal when a junction is expanded; ties are broken alphabetically. In what order does Uniform Cost Search (UCS) expand junctions from S to G (including S and G), and what is the cost of the route it returns?",
    "options": {
      "A": "S, E, F, B, G (cost 6)",
      "B": "S, E, F, B, G (cost 5)",
      "C": "S, E, G (cost 5)",
      "D": "S, D, B, C, G (cost 14)"
    },
    "answer": "B"
  },
  {
    "id": 24,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Directed roads: S->B, S->C, S->F, A->G, B->D, B->G, C->B, C->D, C->G, D->A, D->G, F->B, F->D. DFS starts at S and seeks G, takes neighbours alphabetically (the alphabetically first neighbour is explored first), never expands a node twice, and tests the goal when a node is expanded. In what order does DFS expand nodes (including S and G)?",
    "options": {
      "A": "S, C, F, G",
      "B": "S, B, D, A, G",
      "C": "S, F, D, G",
      "D": "S, B, D, G"
    },
    "answer": "B"
  },
  {
    "id": 25,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "A tree has branching factor b=2, shallowest goal depth d=2 and maximum depth m=5. Roughly how many nodes must BFS and DFS (tree search) hold in memory in the worst case?",
    "options": {
      "A": "BFS about 10 nodes; DFS about 4 nodes",
      "B": "BFS about 4 nodes; DFS about 10 nodes",
      "C": "BFS about 32 nodes; DFS about 4 nodes",
      "D": "BFS about 4 nodes; DFS about 32 nodes"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Directed roads: S->F, B->D, B->E, B->G, D->G, E->D, F->B. DFS starts at S and seeks G, takes neighbours alphabetically (the alphabetically first neighbour is explored first), never expands a node twice, and tests the goal when a node is expanded. In what order does DFS expand nodes (including S and G)?",
    "options": {
      "A": "S, F, B, D, E, G",
      "B": "S, F, B, E, D, G",
      "C": "S, F, B, D, G",
      "D": "S, F, B, G"
    },
    "answer": "C"
  },
  {
    "id": 27,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Which statement about BFS memory is TRUE?",
    "options": {
      "A": "BFS needs only a path of length d",
      "B": "BFS needs O(b x d) memory",
      "C": "BFS needs no frontier",
      "D": "BFS must store all nodes at the current depth in the frontier"
    },
    "answer": "D"
  },
  {
    "id": 28,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "In the 8-puzzle, a state is:",
    "options": {
      "A": "A particular arrangement of the tiles on the board",
      "B": "A single move",
      "C": "The goal only",
      "D": "The heuristic value"
    },
    "answer": "A"
  },
  {
    "id": 29,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "IDDFS is optimal when:",
    "options": {
      "A": "Costs are random",
      "B": "The graph has no goal",
      "C": "The heuristic is inadmissible",
      "D": "All step costs are equal"
    },
    "answer": "D"
  },
  {
    "id": 30,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "BFS is optimal when:",
    "options": {
      "A": "The heuristic is admissible",
      "B": "Step costs are all different",
      "C": "The graph has cycles",
      "D": "All step costs are equal"
    },
    "answer": "D"
  },
  {
    "id": 31,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "BFS is complete when:",
    "options": {
      "A": "Never",
      "B": "The branching factor is finite",
      "C": "The step costs are negative",
      "D": "The tree has infinite depth with infinite branching"
    },
    "answer": "B"
  },
  {
    "id": 32,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Which strategy is generally preferred when solutions are deep but plentiful and memory is limited?",
    "options": {
      "A": "DFS",
      "B": "UCS",
      "C": "A*",
      "D": "BFS"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "Path cost is typically:",
    "options": {
      "A": "The sum of the step costs along the path",
      "B": "The heuristic value",
      "C": "The cost of the goal node only",
      "D": "The depth of the tree"
    },
    "answer": "A"
  },
  {
    "id": 34,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "A well-defined search problem consists of all of the following EXCEPT:",
    "options": {
      "A": "Actions and transition model",
      "B": "Goal test and path cost",
      "C": "Initial state",
      "D": "A heuristic function that must be admissible"
    },
    "answer": "D"
  },
  {
    "id": 35,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "DFS is not optimal because:",
    "options": {
      "A": "It may find a deep solution before a shallower or cheaper one",
      "B": "It uses a priority queue",
      "C": "It expands nodes in cost order",
      "D": "It always finds the shallowest solution"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "The space complexity of IDDFS is:",
    "options": {
      "A": "O(b^m)",
      "B": "O(d^b)",
      "C": "O(b x d)",
      "D": "O(b^d)"
    },
    "answer": "C"
  },
  {
    "id": 37,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "The space complexity of BFS is:",
    "options": {
      "A": "O(b x m)",
      "B": "O(m)",
      "C": "O(b x d)",
      "D": "O(b^d)"
    },
    "answer": "D"
  },
  {
    "id": 38,
    "week": "Week 3 - Uninformed Search (BFS, DFS, UCS, DLS, IDDFS)",
    "question": "In the missionaries and cannibals problem, a state must NOT have:",
    "options": {
      "A": "Missionaries on both banks",
      "B": "Boat on the left bank",
      "C": "All people on the right bank",
      "D": "Cannibals outnumbering missionaries on a bank where missionaries are present"
    },
    "answer": "D"
  },
  {
    "id": 39,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Roads (one-way, minutes): S->A 3, S->E 1, S->F 2, A->G 4, D->A 6, D->E 1, D->G 2, E->A 2, E->G 4, F->D 1, F->E 6. Heuristic: h(S)=6, h(A)=3, h(D)=1, h(E)=6, h(F)=2, h(G)=0. A heuristic is admissible if it never overestimates the cheapest remaining cost to G. At which junction(s) does this heuristic break admissibility?",
    "options": {
      "A": "Only F",
      "B": "Only D",
      "C": "A and F",
      "D": "E and S"
    },
    "answer": "D"
  },
  {
    "id": 40,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Roads (one-way, minutes): S->A 2, S->F 1, A->B 5, A->C 1, A->D 5, B->E 6, B->G 5, C->B 3, C->D 4, D->G 4, E->G 2, F->E 4. Heuristic: h(S)=4, h(A)=7, h(B)=2, h(C)=8, h(D)=3, h(E)=0, h(F)=3, h(G)=0. Use graph search; a junction is never expanded twice; test the goal when a junction is expanded; ties are broken alphabetically. A* runs from S to G. In what order does A* expand junctions (including S and G), and what is the cost of the route it returns?",
    "options": {
      "A": "S, F, G (cost 7)",
      "B": "S, F, E, G (cost 7)",
      "C": "S, A, F, B, C, D, E, G (cost 12)",
      "D": "S, A, B, E, G (cost 15)"
    },
    "answer": "B"
  },
  {
    "id": 41,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "The frontier currently holds these nodes - A: g=7, h=3; C: g=6, h=6; E: g=9, h=2; G: g=4, h=7. Which node does A* expand next?",
    "options": {
      "A": "Node G",
      "B": "Node E",
      "C": "Node C",
      "D": "Node A"
    },
    "answer": "D"
  },
  {
    "id": 42,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "On a map, the cost already travelled from the start to node n is 34 km and the estimated straight-line cost remaining to the goal is 14 km. In A* terms, what are g(n), h(n) and f(n)?",
    "options": {
      "A": "g=34, h=14, f=62",
      "B": "g=48, h=14, f=34",
      "C": "g=34, h=14, f=476",
      "D": "g=34, h=14, f=48"
    },
    "answer": "D"
  },
  {
    "id": 43,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Roads (one-way, minutes): S->A 6, S->D 5, S->F 1, A->G 6, C->A 6, C->E 6, D->C 4, D->E 4, D->F 3, E->G 1, F->A 2, F->E 5. Heuristic: h(S)=7, h(A)=5, h(C)=5, h(D)=2, h(E)=1, h(F)=4, h(G)=0. Use graph search; a junction is never expanded twice; test the goal when a junction is expanded; ties are broken alphabetically. A* runs from S to G. In what order does A* expand junctions (including S and G), and what is the cost of the route it returns?",
    "options": {
      "A": "S, A, D, F, G (cost 12)",
      "B": "S, F, D, E, G (cost 7)",
      "C": "S, D, E, G (cost 10)",
      "D": "S, F, D, G (cost 7)"
    },
    "answer": "B"
  },
  {
    "id": 44,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Roads (one-way, minutes): S->B 4, S->C 3, A->G 1, B->D 1, B->E 1, C->E 4, C->F 6, C->G 2, D->A 4, D->C 1, D->E 3, E->F 3, E->G 6, F->G 2. Heuristic: h(S)=2, h(A)=1, h(B)=1, h(C)=0, h(D)=0, h(E)=4, h(F)=2, h(G)=0. Graph search; never expand a junction twice; test the goal when expanded; children and ties alphabetical. Logs: Rahnuma: S, B, C, D, E, F, G. Safar: S, B, D, A, G. Jaldi: S, C, B, D, E, G. Manzil: S, C, B, D, G. Match Rahnuma, Safar, Jaldi and Manzil, respectively, to BFS, DFS, UCS or A*.",
    "options": {
      "A": "A*, DFS, UCS, BFS",
      "B": "DFS, UCS, A*, BFS",
      "C": "DFS, UCS, BFS, A*",
      "D": "BFS, DFS, UCS, A*"
    },
    "answer": "D"
  },
  {
    "id": 45,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "The frontier currently holds these nodes - C: g=4, h=4; D: g=1, h=4; E: g=1, h=5; H: g=9, h=4. Which node does A* expand next?",
    "options": {
      "A": "Node D",
      "B": "Node H",
      "C": "Node C",
      "D": "Node E"
    },
    "answer": "A"
  },
  {
    "id": 46,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "On a map, the cost already travelled from the start to node n is 22 km and the estimated straight-line cost remaining to the goal is 34 km. In A* terms, what are g(n), h(n) and f(n)?",
    "options": {
      "A": "g=22, h=34, f=748",
      "B": "g=22, h=34, f=12",
      "C": "g=22, h=34, f=56",
      "D": "g=34, h=22, f=56"
    },
    "answer": "C"
  },
  {
    "id": 47,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Roads (one-way, minutes): S->A 2, S->D 2, S->F 1, A->C 4, A->F 2, A->G 1, B->C 3, B->G 2, C->G 1, D->B 4, D->C 5, D->F 2, F->C 3, F->G 2. Heuristic: h(S)=2, h(A)=0, h(B)=2, h(C)=0, h(D)=2, h(F)=2, h(G)=0. Graph search; never expand a junction twice; test the goal when expanded; children and ties alphabetical. Logs: Rahnuma: S, A, C, G. Safar: S, A, F, G. Jaldi: S, A, D, F, C, G. Manzil: S, F, A, D, G. Match Rahnuma, Safar, Jaldi and Manzil, respectively, to BFS, DFS, UCS or A*.",
    "options": {
      "A": "A*, UCS, BFS, DFS",
      "B": "A*, DFS, UCS, BFS",
      "C": "DFS, A*, BFS, UCS",
      "D": "BFS, A*, UCS, DFS"
    },
    "answer": "C"
  },
  {
    "id": 48,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Roads (one-way, minutes): S->A 4, S->D 4, S->F 3, A->B 6, A->F 6, B->G 1, D->B 1, D->G 3, F->B 2, F->D 1. Heuristic: h(S)=3, h(A)=5, h(B)=0, h(D)=1, h(F)=2, h(G)=0. Use graph search; a junction is never expanded twice; test the goal when a junction is expanded; ties are broken alphabetically. A* runs from S to G. In what order does A* expand junctions (including S and G), and what is the cost of the route it returns?",
    "options": {
      "A": "S, A, B, G (cost 11)",
      "B": "S, D, B, F, G (cost 7)",
      "C": "S, A, D, F, B, G (cost 7)",
      "D": "S, D, B, F, G (cost 6)"
    },
    "answer": "D"
  },
  {
    "id": 49,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "The frontier currently holds these nodes - B: g=1, h=6; E: g=6, h=6; F: g=4, h=0; G: g=9, h=3. Which node does A* expand next?",
    "options": {
      "A": "Node F",
      "B": "Node G",
      "C": "Node E",
      "D": "Node B"
    },
    "answer": "A"
  },
  {
    "id": 50,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Roads (one-way, minutes): S->C 2, S->D 4, S->F 4, A->G 5, B->A 4, C->B 6, C->D 1, C->G 6, D->F 1, D->G 2, F->A 3, F->G 3. Heuristic: h(S)=3, h(A)=6, h(B)=11, h(C)=3, h(D)=0, h(F)=1, h(G)=0. A heuristic is admissible if it never overestimates the cheapest remaining cost to G. At which junction(s) does this heuristic break admissibility?",
    "options": {
      "A": "None, the heuristic is admissible",
      "B": "A and C",
      "C": "A and B",
      "D": "Only C"
    },
    "answer": "C"
  },
  {
    "id": 51,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "A* graph search is optimal when the heuristic is:",
    "options": {
      "A": "Negative",
      "B": "Consistent",
      "C": "Random",
      "D": "Overestimating"
    },
    "answer": "B"
  },
  {
    "id": 52,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "A heuristic function h(n) estimates:",
    "options": {
      "A": "The cost from the start to node n",
      "B": "The depth of node n",
      "C": "The cheapest cost from node n to a goal",
      "D": "The branching factor"
    },
    "answer": "C"
  },
  {
    "id": 53,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "A* tree search is optimal when the heuristic is:",
    "options": {
      "A": "Admissible",
      "B": "Always large",
      "C": "Random",
      "D": "Inadmissible"
    },
    "answer": "A"
  },
  {
    "id": 54,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "If h1 and h2 are both admissible, h = h1 + h2 is:",
    "options": {
      "A": "Not necessarily admissible",
      "B": "Always admissible",
      "C": "Always consistent",
      "D": "Always zero"
    },
    "answer": "A"
  },
  {
    "id": 55,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "A heuristic that is admissible but not consistent can cause A* graph search to:",
    "options": {
      "A": "Always be optimal without any change",
      "B": "Always fail",
      "C": "Re-open nodes or return non-optimal paths if closed nodes are never revisited",
      "D": "Use no memory"
    },
    "answer": "C"
  },
  {
    "id": 56,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Greedy best-first search uses:",
    "options": {
      "A": "f(n) = g(n) - h(n)",
      "B": "f(n) = h(n)",
      "C": "f(n) = g(n) + h(n)",
      "D": "f(n) = g(n)"
    },
    "answer": "B"
  },
  {
    "id": 57,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Greedy best-first search is:",
    "options": {
      "A": "Not optimal and not always complete",
      "B": "Always optimal",
      "C": "Never uses a heuristic",
      "D": "Always optimal and complete"
    },
    "answer": "A"
  },
  {
    "id": 58,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "If a heuristic overestimates the cost, A* may:",
    "options": {
      "A": "Never terminate on finite graphs",
      "B": "Return a non-optimal solution",
      "C": "Use no memory",
      "D": "Always return the optimal solution"
    },
    "answer": "B"
  },
  {
    "id": 59,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "A* will never expand a node whose f value is:",
    "options": {
      "A": "Equal to g",
      "B": "Equal to zero",
      "C": "Less than C*",
      "D": "Greater than the optimal solution cost C*"
    },
    "answer": "D"
  },
  {
    "id": 60,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "Uniform cost search uses:",
    "options": {
      "A": "f(n) = g(n)",
      "B": "f(n) = g(n) + h(n)",
      "C": "f(n) = depth(n)",
      "D": "f(n) = h(n)"
    },
    "answer": "A"
  },
  {
    "id": 61,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "In A*, g(n) is:",
    "options": {
      "A": "The estimated cost to the goal",
      "B": "The heuristic value",
      "C": "The depth of the goal",
      "D": "The actual path cost from the start to node n"
    },
    "answer": "D"
  },
  {
    "id": 62,
    "week": "Week 4 - Informed Search (Heuristics & A*)",
    "question": "In A* with equal g values, the node with smaller h is:",
    "options": {
      "A": "Expanded last",
      "B": "Always the goal",
      "C": "Expanded first (lower f)",
      "D": "Ignored"
    },
    "answer": "C"
  },
  {
    "id": 63,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Bit-flip mutation is applied to gene 2 (counting from 1 at the left) of the chromosome 00001010. What is the result?",
    "options": {
      "A": "00001010",
      "B": "01001010",
      "C": "10001010",
      "D": "01101010"
    },
    "answer": "B"
  },
  {
    "id": 64,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Parents P1 = 01011000 and P2 = 01010101. Single-point crossover is applied after position 5 (the first 5 genes stay on the left). What is offspring 1 (head of P1 + tail of P2)?",
    "options": {
      "A": "01011101",
      "B": "01011001",
      "C": "01010000",
      "D": "00001010"
    },
    "answer": "A"
  },
  {
    "id": 65,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Bit-flip mutation is applied to gene 4 (counting from 1 at the left) of the chromosome 11001111. What is the result?",
    "options": {
      "A": "11000111",
      "B": "11011111",
      "C": "11001111",
      "D": "11010111"
    },
    "answer": "B"
  },
  {
    "id": 66,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Parents P1 = 01000011 and P2 = 10101001. Single-point crossover is applied after position 5 (the first 5 genes stay on the left). What is offspring 1 (head of P1 + tail of P2)?",
    "options": {
      "A": "10101011",
      "B": "01000001",
      "C": "01110101",
      "D": "01001001"
    },
    "answer": "B"
  },
  {
    "id": 67,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Four individuals in a GA population have fitness values 2, 12, 3, 8. Using roulette wheel selection, what is the probability of selecting the individual with fitness 3?",
    "options": {
      "A": "16%",
      "B": "13.6%",
      "C": "25%",
      "D": "12%"
    },
    "answer": "D"
  },
  {
    "id": 68,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Parents P1 = 10110101 and P2 = 11111011. Single-point crossover is applied after position 5 (the first 5 genes stay on the left). What is offspring 1 (head of P1 + tail of P2)?",
    "options": {
      "A": "11111101",
      "B": "10111111",
      "C": "10110011",
      "D": "10110111"
    },
    "answer": "C"
  },
  {
    "id": 69,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Bit-flip mutation is applied to gene 4 (counting from 1 at the left) of the chromosome 01100110. What is the result?",
    "options": {
      "A": "01111110",
      "B": "01101110",
      "C": "01110110",
      "D": "01000110"
    },
    "answer": "C"
  },
  {
    "id": 70,
    "week": "Week 5 - Genetic Algorithms",
    "question": "A local maximum is:",
    "options": {
      "A": "The highest peak overall",
      "B": "A peak higher than its neighbours but lower than the global maximum",
      "C": "A valley",
      "D": "A flat region"
    },
    "answer": "B"
  },
  {
    "id": 71,
    "week": "Week 5 - Genetic Algorithms",
    "question": "The global optimum of OneMax on a 6-bit string is:",
    "options": {
      "A": "111111",
      "B": "000000",
      "C": "010101",
      "D": "101010"
    },
    "answer": "A"
  },
  {
    "id": 72,
    "week": "Week 5 - Genetic Algorithms",
    "question": "GAs are useful when the problem:",
    "options": {
      "A": "Needs no optimization",
      "B": "Has an exact formula",
      "C": "Is small enough for brute force",
      "D": "Has a large search space or is non-differentiable"
    },
    "answer": "D"
  },
  {
    "id": 73,
    "week": "Week 5 - Genetic Algorithms",
    "question": "After creating the population, the next step of a basic GA is to:",
    "options": {
      "A": "Evaluate the fitness of each individual",
      "B": "Remove the fitness function",
      "C": "Apply mutation",
      "D": "Stop immediately"
    },
    "answer": "A"
  },
  {
    "id": 74,
    "week": "Week 5 - Genetic Algorithms",
    "question": "Single-point crossover:",
    "options": {
      "A": "Flips one gene",
      "B": "Swaps every gene",
      "C": "Swaps the tails of two parents after one cut point",
      "D": "Copies one parent"
    },
    "answer": "C"
  },
  {
    "id": 75,
    "week": "Week 5 - Genetic Algorithms",
    "question": "In a GA, a population is:",
    "options": {
      "A": "The mutation operator",
      "B": "The fitness function",
      "C": "A set of candidate solutions",
      "D": "A single best solution"
    },
    "answer": "C"
  },
  {
    "id": 76,
    "week": "Week 5 - Genetic Algorithms",
    "question": "A generation in a GA is:",
    "options": {
      "A": "One iteration of selection, crossover and mutation",
      "B": "One chromosome",
      "C": "A single gene",
      "D": "The fitness function"
    },
    "answer": "A"
  },
  {
    "id": 77,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "MAX moves first and then MIN replies. The three MAX moves lead to MIN nodes X1, X2, X3 with leaf utilities - X1: (5, 8, 12); X2: (24, 25, 16); X3: (2, 7, 29). Which move should MAX choose under minimax, and with what guaranteed value?",
    "options": {
      "A": "X3 (value 29)",
      "B": "X3 (value 2)",
      "C": "X2 (value 25)",
      "D": "X2 (value 16)"
    },
    "answer": "D"
  },
  {
    "id": 78,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "A game tree has branching factor b=2 and every path has depth m=5. How many leaf (terminal) nodes does it have?",
    "options": {
      "A": "32",
      "B": "64",
      "C": "16",
      "D": "25"
    },
    "answer": "A"
  },
  {
    "id": 79,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "Alpha-beta pruning is run on a tree with a MAX root and three MIN children, evaluated left to right, leaves - X1: (1, 11, 14); X2: (12, 29, 18); X3: (6, 4, 20). How many of the 9 leaves are pruned (never evaluated)?",
    "options": {
      "A": "5",
      "B": "2",
      "C": "0",
      "D": "3"
    },
    "answer": "B"
  },
  {
    "id": 80,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "MAX moves first and then MIN replies. The three MAX moves lead to MIN nodes X1, X2, X3 with leaf utilities - X1: (25, 4, 26); X2: (16, 17, 3); X3: (8, 19, 10). Which move should MAX choose under minimax, and with what guaranteed value?",
    "options": {
      "A": "X1 (value 26)",
      "B": "X3 (value 8)",
      "C": "X3 (value 19)",
      "D": "X2 (value 3)"
    },
    "answer": "B"
  },
  {
    "id": 81,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "MAX is at the root and has three MIN children X1, X2, X3, each with three leaves (left to right) - X1: (1, 8, 18); X2: (7, 23, 17); X3: (9, 16, 10). What is the minimax value of the root?",
    "options": {
      "A": "16",
      "B": "9",
      "C": "1",
      "D": "23"
    },
    "answer": "B"
  },
  {
    "id": 82,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "Alpha-beta pruning is applied from the root (MAX) over MIN nodes, leaves evaluated left to right - X1: (30, 15, 7); X2: (5, 21, 25); X3: (8, 9, 11). What value does the root return?",
    "options": {
      "A": "30",
      "B": "11",
      "C": "5",
      "D": "8"
    },
    "answer": "D"
  },
  {
    "id": 83,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "MAX is at the root and has three MIN children X1, X2, X3, each with three leaves (left to right) - X1: (14, 7, 26); X2: (8, 17, 29); X3: (18, 9, 25). What is the minimax value of the root?",
    "options": {
      "A": "25",
      "B": "29",
      "C": "9",
      "D": "7"
    },
    "answer": "C"
  },
  {
    "id": 84,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "Pruning occurs when:",
    "options": {
      "A": "alpha < beta",
      "B": "alpha >= beta",
      "C": "alpha = 0",
      "D": "beta = infinity"
    },
    "answer": "B"
  },
  {
    "id": 85,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "An evaluation function estimates:",
    "options": {
      "A": "The depth",
      "B": "The branching factor",
      "C": "The utility of a non-terminal state",
      "D": "The path cost"
    },
    "answer": "C"
  },
  {
    "id": 86,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "Which player moves first at the root of a standard minimax tree, by convention?",
    "options": {
      "A": "Random",
      "B": "MIN",
      "C": "MAX",
      "D": "Chance"
    },
    "answer": "C"
  },
  {
    "id": 87,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "Alpha-beta pruning is used to:",
    "options": {
      "A": "Remove the evaluation function",
      "B": "Eliminate branches that cannot affect the final minimax decision",
      "C": "Add more nodes to search",
      "D": "Change the minimax result"
    },
    "answer": "B"
  },
  {
    "id": 88,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "Minimax value of a MAX node is:",
    "options": {
      "A": "The average of its children's values",
      "B": "The first child's value",
      "C": "The maximum of its children's values",
      "D": "The minimum of its children's values"
    },
    "answer": "C"
  },
  {
    "id": 89,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "For a MIN root with two MAX children having leaves (4, 6) and (5, 1), the root value is:",
    "options": {
      "A": "1",
      "B": "5",
      "C": "6",
      "D": "4"
    },
    "answer": "B"
  },
  {
    "id": 90,
    "week": "Week 6 - Adversarial Search (Minimax & Alpha-Beta)",
    "question": "The number of positions in chess is so large that minimax must:",
    "options": {
      "A": "Search the full tree",
      "B": "Use a depth cutoff with an evaluation function",
      "C": "Use no heuristic",
      "D": "Ignore the opponent"
    },
    "answer": "B"
  },
  {
    "id": 91,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "A document has 750 tokens. It is split into fixed-size chunks of 100 tokens with an overlap of 10 tokens (the last chunk may be shorter, and the chunking stops once the last token is covered). How many chunks are produced?",
    "options": {
      "A": "10",
      "B": "8",
      "C": "9",
      "D": "7"
    },
    "answer": "C"
  },
  {
    "id": 92,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "Two word embeddings are a = (12, 5) and b = (5, 12). What is their cosine similarity?",
    "options": {
      "A": "0.29",
      "B": "0.71",
      "C": "120",
      "D": "4.62"
    },
    "answer": "B"
  },
  {
    "id": 93,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "The embedding vector (8, 6) is L2-normalized. What is the result?",
    "options": {
      "A": "(4, 3)",
      "B": "(0.57, 0.43)",
      "C": "(0.08, 0.06)",
      "D": "(0.8, 0.6)"
    },
    "answer": "D"
  },
  {
    "id": 94,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "A document has 900 tokens. It is split into fixed-size chunks of 200 tokens with an overlap of 40 tokens (the last chunk may be shorter, and the chunking stops once the last token is covered). How many chunks are produced?",
    "options": {
      "A": "6",
      "B": "7",
      "C": "5",
      "D": "4"
    },
    "answer": "A"
  },
  {
    "id": 95,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "Two word embeddings are a = (-3, 4) and b = (0, 5). What is their cosine similarity?",
    "options": {
      "A": "0.8",
      "B": "20",
      "C": "-0.8",
      "D": "0.2"
    },
    "answer": "A"
  },
  {
    "id": 96,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "In TF-IDF, a word that appears in almost all documents gets:",
    "options": {
      "A": "A zero TF always",
      "B": "A low IDF weight",
      "C": "An infinite weight",
      "D": "A high IDF weight"
    },
    "answer": "B"
  },
  {
    "id": 97,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "The famous analogy king - man + woman is close to:",
    "options": {
      "A": "table",
      "B": "queen",
      "C": "prince",
      "D": "country"
    },
    "answer": "B"
  },
  {
    "id": 98,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "Stop words are:",
    "options": {
      "A": "Only nouns",
      "B": "Only verbs",
      "C": "Very common words such as \"the\" and \"is\" often removed",
      "D": "Rare technical words"
    },
    "answer": "C"
  },
  {
    "id": 99,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "After L2 normalization, cosine similarity equals:",
    "options": {
      "A": "The Euclidean distance",
      "B": "The edit distance",
      "C": "The dot product",
      "D": "The vector length"
    },
    "answer": "C"
  },
  {
    "id": 100,
    "week": "Week 7 - NLP Fundamentals (Tokenization, Embeddings, Chunking)",
    "question": "An advantage of sentence-based chunking is that it:",
    "options": {
      "A": "Ignores punctuation",
      "B": "Keeps complete sentences intact",
      "C": "Requires no tokenization",
      "D": "Always makes equal-size chunks"
    },
    "answer": "B"
  }
];


// Artificial Intelligence Mid Term - 100 MCQs Interactive Quiz Script
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const questionsContainer = document.getElementById('questionsContainer');
  const noResultsEl = document.getElementById('noResults');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const statusFilter = document.getElementById('statusFilter');
  const weekTabs = document.querySelectorAll('.week-tab');
  
  // Dashboard stats
  const statAttempted = document.getElementById('statAttempted');
  const statCorrect = document.getElementById('statCorrect');
  const statWrong = document.getElementById('statWrong');
  const statAccuracy = document.getElementById('statAccuracy');
  const progressBar = document.getElementById('quizProgressBar');
  const progressText = document.getElementById('progressText');
  
  // Navigator Drawer
  const openNavBtn = document.getElementById('openNavBtn');
  const closeNavBtn = document.getElementById('closeNavBtn');
  const navDrawer = document.getElementById('navDrawer');
  const navDrawerOverlay = document.getElementById('navDrawerOverlay');
  const gridContainer = document.getElementById('gridContainer');
  const legendUnanswered = document.getElementById('legendUnanswered');
  const legendCorrect = document.getElementById('legendCorrect');
  const legendWrong = document.getElementById('legendWrong');

  // Controls
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundOnIcon = document.getElementById('soundOnIcon');
  const soundOffIcon = document.getElementById('soundOffIcon');
  const resetAllBtn = document.getElementById('resetAllBtn');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // State
  let userAnswers = {}; // { qId: { selected: 'A', isCorrect: true/false } }
  let activeWeek = 'all';
  let activeStatus = 'all';
  let searchQuery = '';
  let soundEnabled = true;

  // Initialize Local Storage State
  function loadPersistedState() {
    try {
      const savedAnswers = localStorage.getItem('ai_quiz_answers');
      if (savedAnswers) {
        userAnswers = JSON.parse(savedAnswers);
      }
      const savedTheme = localStorage.getItem('ai_quiz_theme');
      if (savedTheme === 'dark') {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
      }
      const savedSound = localStorage.getItem('ai_quiz_sound');
      if (savedSound !== null) {
        soundEnabled = savedSound === 'true';
        updateSoundIcons();
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }

  function savePersistedAnswers() {
    try {
      localStorage.setItem('ai_quiz_answers', JSON.stringify(userAnswers));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  // Audio Effects via Web Audio API (no external file downloads needed)
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'correct') {
        // Melodic positive chime (two notes: E5 -> G#5)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(659.25, now); // E5
        osc1.frequency.exponentialRampToValueAtTime(830.61, now + 0.12); // G#5
        gain1.gain.setValueAtTime(0.18, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.35);
      } else if (type === 'wrong') {
        // Gentle low buzz (F#3 -> D3)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(185, now);
        osc2.frequency.linearRampToValueAtTime(130, now + 0.22);
        gain2.gain.setValueAtTime(0.15, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now);
        osc2.stop(now + 0.25);
      }
    } catch (e) {
      // Audio not permitted or supported
    }
  }

  function updateSoundIcons() {
    if (soundEnabled) {
      soundOnIcon.classList.remove('hidden');
      soundOffIcon.classList.add('hidden');
    } else {
      soundOnIcon.classList.add('hidden');
      soundOffIcon.classList.remove('hidden');
    }
  }

  // Update Live Dashboard Stats
  function updateDashboard() {
    const totalQuestions = quizData.length;
    const answeredKeys = Object.keys(userAnswers);
    const attemptedCount = answeredKeys.length;
    
    let correctCount = 0;
    let wrongCount = 0;

    answeredKeys.forEach(id => {
      if (userAnswers[id].isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const progressPercent = Math.round((attemptedCount / totalQuestions) * 100);

    statAttempted.textContent = `${attemptedCount} / ${totalQuestions}`;
    statCorrect.textContent = correctCount;
    statWrong.textContent = wrongCount;
    statAccuracy.textContent = `${accuracy}%`;

    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${progressPercent}% Mukammal (${attemptedCount}/${totalQuestions})`;

    // Update Navigator Drawer Legends
    legendUnanswered.textContent = totalQuestions - attemptedCount;
    legendCorrect.textContent = correctCount;
    legendWrong.textContent = wrongCount;

    // Update Navigator Grid buttons
    updateNavigatorGrid();
  }

  // Build Navigator Grid (1 to 100)
  function initNavigatorGrid() {
    gridContainer.innerHTML = '';
    quizData.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'grid-q-btn';
      btn.id = `nav-btn-${q.id}`;
      btn.textContent = q.id;
      btn.title = `Question ${q.id}`;
      btn.addEventListener('click', () => {
        closeDrawer();
        jumpToQuestion(q.id);
      });
      gridContainer.appendChild(btn);
    });
    updateNavigatorGrid();
  }

  function updateNavigatorGrid() {
    quizData.forEach(q => {
      const btn = document.getElementById(`nav-btn-${q.id}`);
      if (!btn) return;
      btn.className = 'grid-q-btn';
      if (userAnswers[q.id]) {
        if (userAnswers[q.id].isCorrect) {
          btn.classList.add('is-correct');
        } else {
          btn.classList.add('is-wrong');
        }
      }
    });
  }

  // Jump to specific question
  function jumpToQuestion(questionId) {
    // If the question is currently hidden due to active week or status filter, reset filters
    const q = quizData.find(item => item.id === questionId);
    if (!q) return;

    let needRerender = false;
    if (activeWeek !== 'all') {
      const weekNum = q.week.split('-')[0].replace('Week', '').trim();
      if (activeWeek !== weekNum) {
        activeWeek = 'all';
        weekTabs.forEach(t => {
          t.classList.toggle('active', t.getAttribute('data-week') === 'all');
        });
        needRerender = true;
      }
    }

    if (activeStatus !== 'all') {
      activeStatus = 'all';
      statusFilter.value = 'all';
      needRerender = true;
    }

    if (searchQuery !== '') {
      searchQuery = '';
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      needRerender = true;
    }

    if (needRerender) {
      renderQuestions();
    }

    // Scroll to the question card
    setTimeout(() => {
      const card = document.getElementById(`q-card-${questionId}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Visual pulse highlight
        card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
        card.style.borderColor = 'var(--primary)';
        card.style.boxShadow = '0 0 0 4px var(--primary-light)';
        setTimeout(() => {
          card.style.borderColor = '';
          card.style.boxShadow = '';
        }, 1500);
      }
    }, 100);
  }

  // Filter Logic
  function getFilteredQuestions() {
    return quizData.filter(q => {
      // 1. Week Filter
      if (activeWeek !== 'all') {
        const weekNum = q.week.split('-')[0].replace('Week', '').trim();
        if (weekNum !== activeWeek) return false;
      }

      // 2. Status Filter
      const isAnswered = !!userAnswers[q.id];
      if (activeStatus === 'unanswered' && isAnswered) return false;
      if (activeStatus === 'correct' && (!isAnswered || !userAnswers[q.id].isCorrect)) return false;
      if (activeStatus === 'wrong' && (!isAnswered || userAnswers[q.id].isCorrect)) return false;

      // 3. Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const inQuestion = q.question.toLowerCase().includes(query);
        const inOptions = Object.values(q.options).some(opt => opt.toLowerCase().includes(query));
        const inId = `q${q.id}`.includes(query) || `${q.id}` === query;
        if (!inQuestion && !inOptions && !inId) return false;
      }

      return true;
    });
  }

  // Render Questions
  function renderQuestions() {
    const list = getFilteredQuestions();

    if (list.length === 0) {
      questionsContainer.innerHTML = '';
      noResultsEl.classList.remove('hidden');
      return;
    } else {
      noResultsEl.classList.add('hidden');
    }

    questionsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();

    list.forEach(q => {
      const card = createQuestionCard(q);
      fragment.appendChild(card);
    });

    questionsContainer.appendChild(fragment);
  }

  // Create single Question Card DOM
  function createQuestionCard(q) {
    const card = document.createElement('article');
    card.className = 'q-card';
    card.id = `q-card-${q.id}`;

    const answeredData = userAnswers[q.id];
    const isAnswered = !!answeredData;

    // Header with badges
    let statusBadgeHtml = '<span class="q-status-badge unanswered">Ghair Hal-Shuda (Unattempted)</span>';
    if (isAnswered) {
      if (answeredData.isCorrect) {
        statusBadgeHtml = '<span class="q-status-badge correct">✓ Sahi Jawab</span>';
      } else {
        statusBadgeHtml = '<span class="q-status-badge wrong">✗ Ghalat Jawab</span>';
      }
    }

    // Card Header
    const headerEl = document.createElement('div');
    headerEl.className = 'q-header';
    headerEl.innerHTML = `
      <div class="q-tags">
        <span class="q-num-pill">Sawal #${q.id}</span>
        <span class="q-week-pill">${q.week}</span>
      </div>
      <div class="q-status-area" id="status-area-${q.id}">
        ${statusBadgeHtml}
      </div>
    `;
    card.appendChild(headerEl);

    // Question Text
    const textEl = document.createElement('h3');
    textEl.className = 'q-text';
    textEl.textContent = q.question;
    card.appendChild(textEl);

    // Options Container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'q-options';
    optionsContainer.id = `options-${q.id}`;

    const optionKeys = ['A', 'B', 'C', 'D'];
    optionKeys.forEach(key => {
      const optText = q.options[key];
      if (!optText) return;

      const optBtn = document.createElement('button');
      optBtn.type = 'button';
      optBtn.className = 'option-btn';
      optBtn.dataset.key = key;
      optBtn.id = `opt-${q.id}-${key}`;

      let iconHtml = '';

      // If already answered, apply styling
      if (isAnswered) {
        optBtn.disabled = true;
        if (key === answeredData.selected) {
          if (answeredData.isCorrect) {
            optBtn.classList.add('is-correct');
            iconHtml = '<span class="opt-icon">✓</span>';
          } else {
            optBtn.classList.add('is-wrong');
            iconHtml = '<span class="opt-icon">✗</span>';
          }
        }
        // If user was wrong, reveal the true correct answer
        if (!answeredData.isCorrect && key === q.answer) {
          optBtn.classList.add('reveal-correct');
          iconHtml = '<span class="opt-icon">✓ (Sahi Jawab)</span>';
        }
      }

      optBtn.innerHTML = `
        <span class="opt-letter">${key}</span>
        <span class="opt-text">${escapeHtml(optText)}</span>
        ${iconHtml}
      `;

      // Click Event - Instant Feedback!
      optBtn.addEventListener('click', () => {
        handleOptionClick(q, key);
      });

      optionsContainer.appendChild(optBtn);
    });
    card.appendChild(optionsContainer);

    // Feedback Container (shown immediately if answered)
    const feedbackBox = document.createElement('div');
    feedbackBox.id = `feedback-${q.id}`;
    if (isAnswered) {
      feedbackBox.innerHTML = renderFeedbackContent(q, answeredData.selected, answeredData.isCorrect);
    }
    card.appendChild(feedbackBox);

    return card;
  }

  // Handle Option Click - Instant Answer Check & Reveal
  function handleOptionClick(q, selectedKey) {
    if (userAnswers[q.id]) return; // Already answered

    const isCorrect = (selectedKey === q.answer);

    // Save answer
    userAnswers[q.id] = {
      selected: selectedKey,
      isCorrect: isCorrect
    };
    savePersistedAnswers();

    // Play Audio
    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('wrong');
    }

    // Disable all options for this question & apply classes
    const optionKeys = ['A', 'B', 'C', 'D'];
    optionKeys.forEach(key => {
      const btn = document.getElementById(`opt-${q.id}-${key}`);
      if (!btn) return;
      btn.disabled = true;

      if (key === selectedKey) {
        if (isCorrect) {
          btn.classList.add('is-correct');
          btn.querySelector('.opt-letter').textContent = '✓';
        } else {
          btn.classList.add('is-wrong');
          btn.querySelector('.opt-letter').textContent = '✗';
        }
      }

      // If wrong, reveal correct answer
      if (!isCorrect && key === q.answer) {
        btn.classList.add('reveal-correct');
        const iconSpan = document.createElement('span');
        iconSpan.className = 'opt-icon';
        iconSpan.innerHTML = '<strong>✓ (Sahi Jawab)</strong>';
        btn.appendChild(iconSpan);
      }
    });

    // Update Status Badge on Card
    const statusArea = document.getElementById(`status-area-${q.id}`);
    if (statusArea) {
      if (isCorrect) {
        statusArea.innerHTML = '<span class="q-status-badge correct">✓ Sahi Jawab</span>';
      } else {
        statusArea.innerHTML = '<span class="q-status-badge wrong">✗ Ghalat Jawab</span>';
      }
    }

    // Show Feedback Box with Answer Info
    const feedbackBox = document.getElementById(`feedback-${q.id}`);
    if (feedbackBox) {
      feedbackBox.innerHTML = renderFeedbackContent(q, selectedKey, isCorrect);
      // Bind retry button inside feedback
      const retryBtn = feedbackBox.querySelector('.btn-retry');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => retryQuestion(q.id));
      }
    }

    // Update Live Dashboard & Question Navigator Grid
    updateDashboard();
  }

  // Generate HTML for Feedback Box
  function renderFeedbackContent(q, selectedKey, isCorrect) {
    const correctText = q.options[q.answer] || '';

    if (isCorrect) {
      return `
        <div class="q-feedback feedback-correct">
          <div class="feedback-content">
            <div class="feedback-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <div class="feedback-title">✓ Bilkul Sahi Jawab! (Correct)</div>
              <div class="feedback-desc">Aapne durust option <strong>(${selectedKey}) ${escapeHtml(q.options[selectedKey])}</strong> muntakhib kiya.</div>
            </div>
          </div>
          <button class="btn-retry" onclick="window.retryQuestion(${q.id})">Retry</button>
        </div>
      `;
    } else {
      return `
        <div class="q-feedback feedback-wrong">
          <div class="feedback-content">
            <div class="feedback-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <div>
              <div class="feedback-title">✗ Ghalat Jawab! (Incorrect)</div>
              <div class="feedback-desc">
                Aapka jawab: <strong>(${selectedKey})</strong><br>
                Asal Sahi Jawab hai: <strong>Option (${q.answer}) — ${escapeHtml(correctText)}</strong>
              </div>
            </div>
          </div>
          <button class="btn-retry" onclick="window.retryQuestion(${q.id})">Retry</button>
        </div>
      `;
    }
  }

  // Retry a single question
  window.retryQuestion = function(questionId) {
    delete userAnswers[questionId];
    savePersistedAnswers();
    updateDashboard();

    const q = quizData.find(item => item.id === questionId);
    if (!q) return;

    // Replace the card in DOM
    const oldCard = document.getElementById(`q-card-${questionId}`);
    if (oldCard) {
      const newCard = createQuestionCard(q);
      oldCard.replaceWith(newCard);
    }
  };

  // Reset All Progress
  resetAllBtn.addEventListener('click', () => {
    if (Object.keys(userAnswers).length === 0) {
      alert('Abhi tak koi sawal attempt nahi kiya gaya.');
      return;
    }
    const confirmed = confirm('Kia aap waqai tamam answers reset krna chahtay hain? Aapka score 0 ho jaye ga.');
    if (confirmed) {
      userAnswers = {};
      localStorage.removeItem('ai_quiz_answers');
      updateDashboard();
      renderQuestions();
    }
  });

  // Week Filter Tabs
  weekTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      weekTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeWeek = tab.getAttribute('data-week');
      renderQuestions();
    });
  });

  // Status Filter Dropdown
  statusFilter.addEventListener('change', (e) => {
    activeStatus = e.target.value;
    renderQuestions();
  });

  // Search Input with Debounce
  let searchTimeout = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchQuery = e.target.value.trim();
    if (searchQuery.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    searchTimeout = setTimeout(() => {
      renderQuestions();
    }, 200);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderQuestions();
  });

  // Reset Filters from "No Results" button
  resetFilterBtn.addEventListener('click', () => {
    activeWeek = 'all';
    activeStatus = 'all';
    searchQuery = '';
    searchInput.value = '';
    statusFilter.value = 'all';
    clearSearchBtn.classList.add('hidden');
    weekTabs.forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-week') === 'all');
    });
    renderQuestions();
  });

  // Navigator Drawer Open/Close
  function openDrawer() {
    navDrawer.classList.remove('hidden');
    navDrawerOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.add('hidden');
    navDrawerOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openNavBtn.addEventListener('click', openDrawer);
  closeNavBtn.addEventListener('click', closeDrawer);
  navDrawerOverlay.addEventListener('click', closeDrawer);

  // Sound Toggle
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('ai_quiz_sound', soundEnabled);
    updateSoundIcons();
  });

  // Theme Toggle (Light / Dark)
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');
    if (isDark) {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      moonIcon.classList.remove('hidden');
      sunIcon.classList.add('hidden');
      localStorage.setItem('ai_quiz_theme', 'light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
      localStorage.setItem('ai_quiz_theme', 'dark');
    }
  });

  // Scroll to Top Button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.remove('hidden');
    } else {
      scrollTopBtn.classList.add('hidden');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Utility: HTML Escaper
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Run
  loadPersistedState();
  initNavigatorGrid();
  updateDashboard();
  renderQuestions();
});
