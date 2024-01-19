import Assignment from "./Assingment.js"
export default {
    components : {Assignment},
    template: `
        <section v-show="status.length">
            <h2 class="font-bold mb-2 ">
                {{title}} 
                ({{status.length}})
            </h2>

            <div class="flex gap-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs" 
                    :class="{
                        'border-blue-500 text-blue-500' : tag === currentTag
                    }"
                >{{tag}}</button>
            </div>
            
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                    <assignment
                        v-for = "a in filteredAssignments"
                        :key = "a.id"
                        :a="a"
                    ></assignment>
                </ul>
            
        </section>
    `,

    props: {
        title : String,
        status : Array
    },

    data() {
        return {
            currentTag : 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.status;
            }
            return this.status.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ['all' , ...new Set(this.status.map(a=>a.tag))];
        }
    }
}