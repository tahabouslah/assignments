import Assignment from "./Assingment.js"
export default {
    components : {Assignment},
    template: `
        <section v-show="status.length">
            <h2>{{title}}</h2>
            
                <ul>
                    <assignment
                        v-for = "a in status"
                        :key = "a.id"
                        :a="a"
                    ></assignment>
                </ul>
            
        </section>
    `,

    props: {
        title : String,
        status : Array
    }
}