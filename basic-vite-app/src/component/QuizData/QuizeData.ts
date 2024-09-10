
interface Quize {
    questions: {
        question: string;
        options: string[];
        correctAnswer: string;
    }[];
};



const quizeData: Quize = {
    questions: [
        {
          question: "What is the capital of India?",
          options: ["New Delhi", "London", "Berlin", "Madrid"],
          correctAnswer: "New Delhi",
        },
        {
          question: "Who wrote 'Marchent of Venis'?",
          options: ["Shakespeare", "Tolkien", "Rowling", "Orwell"],
          correctAnswer: "Shakespeare",
        },
        {
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
        },
        {
            question: "Who won most number of UCL",
            options: ['AC Milan', 'Real Madrid', 'FC Barcelona', 'Liverpool'],
            correctAnswer: 'Real Madrid',
        },
        {
            question: "Who is the 1st non european won Nobel Peize?",
            options: ['Rabindranath Tegore', 'CV Ramon', 'Hargovinda Khorana', 'Amartya Sen'],
            correctAnswer: 'Rabindranath Tegore',
        },
        {
            question: 'Which Mahabharat Character called Sabhyasachi?',
            options: ['Karna', 'Yudhisthir', 'Arjuna', 'Abhimanyu'],
            correctAnswer: 'Arjuna',
        },
        {
            question: 'Which Company develop React?',
            options: ['Alphabate', 'Microsoft', 'Nvidia', 'FaceBook'],
            correctAnswer: 'FaceBook',
        },
        {
            question: 'Who has highest no of inernation Odi century',
            options: ['Virat Kohli', 'Tendulkar', 'Dravid', 'Ponting'],
            correctAnswer: 'Virat Kohli',
        },
        {
            question: 'Whaich Mission India successfully Moon south pole?',
            options: ['Chandrayan 1', 'Chandrayan 2', 'Chandrayan 3', 'Chandrayan 4'],
            correctAnswer: 'Chandrayan 3',
        },
        {
            question: 'Who formed Indian National Army?',
            options: ['Rashbihari Bose', 'Subhas Ch Bose', 'Sardar Patel', 'Bhagat Singh'],
            correctAnswer: 'Rashbihari Bose',
        },
    ],
}

export default quizeData;