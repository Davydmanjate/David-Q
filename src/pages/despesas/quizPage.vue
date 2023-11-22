<template>
  <div>
    <question
      v-if="currentQuestion"
      :question="currentQuestion"
      :score="score"
      @answerSelected="checkAnswer"
    ></question>
    <div v-else>
      <h2>Parabéns! Você ganhou {{ score }} pontos!</h2>
      <button @click="restartQuiz">Reiniciar</button>
    </div>
  </div>
</template>

<script>
import Question from 'components/Question.vue';

export default {
  components: {
    Question
  },
  data() {
    return {
      questions: [
        {
          text: 'Qual é a capital do Brasil?',
          answers: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
          correctAnswer: 'Brasília'
        },
        {
          text: 'Quem escreveu "Dom Quixote"?',
          answers: ['Miguel de Cervantes', 'William Shakespeare', 'Charles Dickens', 'Jane Austen'],
          correctAnswer: 'Miguel de Cervantes'
        },
        // Adicione mais perguntas conforme necessário
      ],
      currentQuestionIndex: 0,
      score: 0
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    checkAnswer(selectedAnswer) {
      if (selectedAnswer === this.currentQuestion.correctAnswer) {
        this.score += 1000; // Pontuação arbitrária, você pode ajustar conforme necessário
        this.nextQuestion();
      } else {
        alert('Resposta incorreta. Você ganhou ' + this.score + ' pontos!');
      }
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        // Avance para a próxima pergunta
      } else {
        // Fim do jogo
        this.currentQuestionIndex = null;
      }
    },
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  }
};
</script>
