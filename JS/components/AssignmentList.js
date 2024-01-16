import Assignment from "./Assingment.js"
export default {
    components : {Assignment},
    template: `
        <section v-show="status.length">
            <h2 class="font-bold mb-2 ">{{title}}</h2>
            
                <ul class="border border-gray-600 divide-y divide-gary-600">
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