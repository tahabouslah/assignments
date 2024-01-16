export default {
    template: `
        <li>
            <label>
                {{a.name}}  
                <input type="checkbox" v-model=" a.complete">
            </label>
        </li> 
    `,

    props: {
        a : Object
    }
}