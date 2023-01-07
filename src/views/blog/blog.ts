import { Options, Vue } from "vue-class-component";
@Options({
    props: {
    },
    data: () => {
        return {
            dat: ""
        }
    }
})
export default class Blog extends Vue {
    response!: any;
    dat!: any;
    // curPageToken!: string;
    // prevPageToken!: string;

    created() {
        this.getData();
    }


    async getData(nextPageToken?: string) {
        // this.prevPageToken = this.curPageToken;
        // this.curPageToken = nextPageToken!;
        const url = nextPageToken ? "https://www.googleapis.com/blogger/v3/blogs/7866329503624768729/posts?key=AIzaSyBa8_VLGrNfgFjv27E6ASgVI9PemudPYAM&pageToken=" + nextPageToken : "https://www.googleapis.com/blogger/v3/blogs/7866329503624768729/posts?key=AIzaSyBa8_VLGrNfgFjv27E6ASgVI9PemudPYAM";
        this.response = await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.dat = data;
            });
    }
}
