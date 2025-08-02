const quizData = [
  {
    "id": 1,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 2,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 3,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 4,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 5,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 6,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 7,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 8,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 9,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 10,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 11,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 12,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 13,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 14,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 15,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 16,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 17,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 18,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 19,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 20,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 21,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 22,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 23,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 24,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 25,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 26,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 27,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 28,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 29,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 30,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 31,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 32,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 33,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 34,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 35,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 36,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 37,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 38,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 39,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 40,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 41,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 42,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 43,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 44,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 45,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 46,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 47,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 48,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 49,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 50,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 51,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 52,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 53,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 54,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 55,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 56,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 57,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 58,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 59,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 60,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 61,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 62,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 63,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 64,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 65,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 66,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 67,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 68,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 69,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 70,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 71,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 72,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 73,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 74,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 75,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 76,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 77,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 78,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 79,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 80,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 81,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 82,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 83,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 84,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 85,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 86,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 87,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 88,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 89,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 90,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 91,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 92,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 93,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 94,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 95,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 96,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 97,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 98,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 99,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 100,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 101,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 102,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 103,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 104,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 105,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 106,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 107,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 108,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 109,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 110,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 111,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 112,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 113,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 114,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 115,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 116,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 117,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 118,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 119,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 120,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 121,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 122,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 123,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 124,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 125,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 126,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 127,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 128,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 129,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 130,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 131,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 132,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 133,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 134,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 135,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 136,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 137,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 138,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 139,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 140,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 141,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 142,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 143,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 144,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 145,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 146,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 147,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 148,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 149,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 150,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 151,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 152,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 153,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 154,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 155,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 156,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 157,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 158,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 159,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 160,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 161,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 162,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 163,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 164,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 165,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 166,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 167,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 168,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 169,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 170,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 171,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 172,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 173,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 174,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 175,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 176,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 177,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 178,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 179,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 180,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 181,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 182,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 183,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 184,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 185,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 186,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 187,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 188,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 189,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 190,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 191,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 192,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 193,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 194,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 195,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 196,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 197,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 198,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 199,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 200,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 201,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 202,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 203,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 204,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 205,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 206,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 207,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 208,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 209,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 210,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 211,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 212,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 213,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 214,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 215,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 216,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 217,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 218,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 219,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 220,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 221,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 222,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 223,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 224,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 225,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 226,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 227,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 228,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 229,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 230,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 231,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 232,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 233,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 234,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 235,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 236,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 237,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 238,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 239,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 240,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 241,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 242,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 243,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 244,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 245,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 246,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 247,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 248,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 249,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 250,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 251,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 252,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 253,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 254,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 255,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 256,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 257,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 258,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 259,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 260,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 261,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 262,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 263,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 264,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 265,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 266,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 267,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 268,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 269,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 270,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 271,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 272,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 273,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 274,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 275,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 276,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 277,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 278,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 279,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 280,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 281,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 282,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 283,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 284,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 285,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 286,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 287,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 288,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 289,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 290,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 291,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 292,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 293,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 294,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 295,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 296,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 297,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 298,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 299,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 300,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 301,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 302,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 303,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 304,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 305,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 306,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 307,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 308,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 309,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 310,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 311,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 312,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 313,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 314,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 315,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 316,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 317,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 318,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 319,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 320,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 321,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 322,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 323,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 324,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 325,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 326,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 327,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 328,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 329,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 330,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 331,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 332,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 333,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 334,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 335,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 336,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 337,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 338,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 339,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 340,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 341,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 342,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 343,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 344,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 345,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 346,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 347,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 348,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 349,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 350,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 351,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 352,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 353,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 354,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 355,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 356,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 357,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 358,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 359,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 360,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 361,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 362,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 363,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 364,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 365,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 366,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 367,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 368,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 369,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 370,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 371,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 372,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 373,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 374,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 375,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 376,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 377,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 378,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 379,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 380,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 381,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 382,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 383,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 384,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 385,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 386,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 387,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 388,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 389,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 390,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 391,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 392,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 393,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 394,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 395,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 396,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 397,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 398,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 399,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 400,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 401,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 402,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 403,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 404,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 405,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 406,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 407,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 408,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 409,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 410,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 411,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 412,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 413,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 414,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 415,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 416,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 417,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 418,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 419,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 420,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 421,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 422,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 423,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 424,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 425,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 426,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 427,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 428,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 429,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 430,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 431,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 432,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 433,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 434,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 435,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 436,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 437,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 438,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 439,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 440,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 441,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 442,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 443,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 444,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 445,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 446,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 447,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 448,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 449,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 450,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 451,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 452,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 453,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 454,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 455,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 456,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 457,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 458,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 459,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 460,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 461,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 462,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 463,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 464,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 465,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 466,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 467,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 468,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 469,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 470,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 471,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 472,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 473,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 474,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 475,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 476,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 477,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 478,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 479,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 480,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 481,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 482,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 483,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 484,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 485,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 486,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 487,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 488,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 489,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 490,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 491,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 492,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 493,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 494,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 495,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 496,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 497,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 498,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 499,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 500,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 501,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 502,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 503,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 504,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 505,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 506,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 507,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 508,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 509,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 510,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 511,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 512,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 513,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 514,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 515,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 516,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 517,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 518,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 519,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 520,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 521,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 522,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 523,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 524,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 525,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 526,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 527,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 528,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 529,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 530,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 531,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 532,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 533,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 534,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 535,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 536,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 537,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 538,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 539,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 540,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 541,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 542,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 543,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 544,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 545,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 546,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 547,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 548,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 549,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 550,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 551,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 552,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 553,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 554,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 555,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 556,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 557,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 558,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 559,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 560,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 561,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 562,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 563,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 564,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 565,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 566,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 567,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 568,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 569,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 570,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 571,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 572,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 573,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 574,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 575,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 576,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 577,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 578,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 579,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 580,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 581,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 582,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 583,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 584,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 585,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 586,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 587,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 588,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 589,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 590,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 591,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 592,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 593,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 594,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 595,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 596,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 597,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 598,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 599,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 600,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 601,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 602,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 603,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 604,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 605,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 606,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 607,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 608,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 609,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 610,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 611,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 612,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 613,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 614,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 615,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 616,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 617,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 618,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 619,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 620,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 621,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 622,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 623,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 624,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 625,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 626,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 627,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 628,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 629,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 630,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 631,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 632,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 633,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 634,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 635,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 636,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 637,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 638,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 639,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 640,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 641,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 642,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 643,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 644,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 645,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 646,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 647,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 648,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 649,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 650,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 651,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 652,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 653,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 654,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 655,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 656,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 657,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 658,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 659,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 660,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 661,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 662,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 663,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 664,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 665,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 666,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 667,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 668,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 669,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 670,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 671,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 672,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 673,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 674,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 675,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 676,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 677,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 678,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 679,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 680,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 681,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 682,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 683,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 684,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 685,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 686,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 687,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 688,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 689,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 690,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 691,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 692,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 693,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 694,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 695,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 696,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 697,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 698,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 699,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 700,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 701,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 702,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 703,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 704,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 705,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 706,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 707,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 708,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 709,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 710,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 711,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 712,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 713,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 714,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 715,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 716,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 717,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 718,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 719,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 720,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 721,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 722,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 723,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 724,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 725,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 726,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 727,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 728,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 729,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 730,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 731,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 732,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 733,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 734,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 735,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 736,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 737,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 738,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 739,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 740,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 741,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 742,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 743,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 744,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 745,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 746,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 747,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 748,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 749,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 750,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 751,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 752,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 753,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 754,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 755,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 756,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 757,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 758,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 759,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 760,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 761,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 762,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 763,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 764,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 765,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 766,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 767,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 768,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 769,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 770,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 771,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 772,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 773,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 774,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 775,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 776,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 777,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 778,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 779,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 780,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 781,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 782,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 783,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 784,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 785,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 786,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 787,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 788,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 789,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 790,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 791,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 792,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 793,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 794,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 795,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 796,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 797,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 798,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 799,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 800,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 801,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 802,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 803,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 804,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 805,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 806,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 807,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 808,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 809,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 810,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 811,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 812,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 813,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 814,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 815,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 816,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 817,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 818,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 819,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 820,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 821,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 822,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 823,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 824,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 825,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 826,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 827,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 828,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 829,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 830,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 831,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 832,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 833,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 834,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 835,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 836,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 837,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 838,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 839,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 840,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 841,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 842,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 843,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 844,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 845,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 846,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 847,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 848,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 849,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 850,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 851,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 852,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 853,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 854,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 855,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 856,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 857,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 858,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 859,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 860,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 861,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 862,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 863,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 864,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 865,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 866,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 867,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 868,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 869,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 870,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 871,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 872,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 873,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 874,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 875,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 876,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 877,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 878,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 879,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 880,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 881,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 882,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 883,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 884,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 885,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 886,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 887,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 888,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 889,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 890,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 891,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 892,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 893,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 894,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 895,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 896,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 897,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 898,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 899,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 900,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 901,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 902,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 903,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 904,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 905,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 906,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 907,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 908,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 909,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 910,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 911,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 912,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 913,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 914,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 915,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 916,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 917,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 918,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 919,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 920,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 921,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 922,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 923,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 924,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 925,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 926,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 927,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 928,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 929,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 930,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 931,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 932,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 933,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 934,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 935,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 936,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 937,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 938,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 939,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 940,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 941,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 942,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 943,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 944,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 945,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 946,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 947,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 948,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 949,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 950,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 951,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 952,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 953,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 954,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 955,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 956,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 957,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 958,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 959,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 960,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 961,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 962,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 963,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 964,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 965,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 966,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 967,
    "question": "Which sorting algorithm has the best average-case performance?",
    "options": [
      "Bubble Sort",
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort"
    ],
    "answer": "Merge Sort"
  },
  {
    "id": 968,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 969,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 970,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 971,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 972,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 973,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 974,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 975,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Interface",
      "Application Protocol Interface",
      "Applied Programming Interface"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 976,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 977,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 978,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 979,
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "id": 980,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 981,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 982,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 983,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 984,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 985,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 986,
    "question": "Which programming language is primarily used for Android development?",
    "options": [
      "Swift",
      "Kotlin",
      "Ruby",
      "Go"
    ],
    "answer": "Kotlin"
  },
  {
    "id": 987,
    "question": "Which SQL command is used to remove data from a table?",
    "options": [
      "DROP",
      "DELETE",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "id": 988,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 989,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 990,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 991,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 992,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 993,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 994,
    "question": "Which protocol is used for secure communication over the internet?",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "HTTPS"
    ],
    "answer": "HTTPS"
  },
  {
    "id": 995,
    "question": "What does 'DOM' stand for in web development?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Digital Order Model",
      "Display Object Model"
    ],
    "answer": "Document Object Model"
  },
  {
    "id": 996,
    "question": "Which data structure uses LIFO order?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    "answer": "Stack"
  },
  {
    "id": 997,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  },
  {
    "id": 998,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 999,
    "question": "Which company maintains the React library?",
    "options": [
      "Microsoft",
      "Google",
      "Meta",
      "Amazon"
    ],
    "answer": "Meta"
  },
  {
    "id": 1000,
    "question": "What does CPU stand for?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Processor Utility"
    ],
    "answer": "Central Processing Unit"
  }
];

export default quizData;