export default {
    template: `
        <section class="space-y-6">
            <li>
                <label class="p-2 flex justify-between items-center">
                    {{a.name}}  
                    <input type="checkbox" v-model=" a.complete" class="ml-3">
                </label>
            </li> 
        </section>
    `,

    props: {
        a : Object
    }
}