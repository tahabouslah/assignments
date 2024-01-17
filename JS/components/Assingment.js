export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{a.name}}  
                <input type="checkbox" v-model=" a.complete" class="ml-3">
            </label>
        </li> 

    `,

    props: {
        a : Object
    }
}