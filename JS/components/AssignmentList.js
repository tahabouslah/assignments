export default {
    template: `
        <section v-show="status.length">
            <h2>{{title}}</h2>
            
                <ul>
                        <li
                            v-for = "a in status"
                            :key = "a.id"
                        >
                            <label>
                                {{a.name}}  
                                <input type="checkbox" v-model=" a.complete">
                            </label>
                        </li> 
                </ul>
            
        </section>
    `,

    props: {
        title : String,
        status : Array
    }
}