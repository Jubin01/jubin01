import { Options, Vue } from "vue-class-component";
import Square from "@/components/square/square.vue"; // @ is an alias to /src
import { PropType } from "vue";
@Options({
    components: {
        Square
    },
    props: {
        //   msg: String,
        // squares: Array as PropType<string[]>,
        // default: () => [], // use a factory function
        //  xIsNext: Boolean,
        //  winner: String,
    },
    data: () => {
        return {
            playervar: "",
            winner:"",
            squares:[]
            // player:""
        }
    }
    // computed: {
    //     playervar() {
    //         return this.playervar;
    //     }
    // }
})
export default class Board extends Vue {
    // msg!: string;
    squares!: string[];
    xIsNext!: boolean;
    winner!: string;
    playervar!: string;

    mounted() {
        this.newGame();
    }

    newGame() {
        // this.msg = 'something';
       // this.squares.splice(0);
        this.squares = Array(9);
        this.squares.fill('');
        // console.log(this.squares);
        this.winner = "";
        this.xIsNext = true;
        this.playervar = 'X';
    }

    player() {
        return this.xIsNext ? 'X' : 'O';
    }

    makeMove(idx: number) {
        if (!this.squares[idx]) {
            this.squares.splice(idx, 1, this.player());
            this.xIsNext = !this.xIsNext;
            this.playervar = this.xIsNext ? 'X' : 'O';
        }
        this.winner = this.calculateWinner();
    }

    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                this.squares[a] &&
                this.squares[a] === this.squares[b] &&
                this.squares[a] === this.squares[c]
            ) {
                return this.squares[a];
            }
        }
        return "";
    }

}