export default {
    template : `
        <section v-show="filters.inProgress.length">
            <h2>In progress</h2>
            
                <ul>
                        <li
                            v-for = "a in filters.inProgress"
                            :key = "a.id"
                        >
                            <label>
                                {{a.name}}  
                                <input type="checkbox" v-model=" a.complete">
                            </label>
                        </li> 
                </ul>
            
        </section>

        <section v-show="filters.completed.length">
            <h2>Completed</h2>
            
                <ul>
                        <li
                            v-for = "a in filters.completed"
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

    data() {
        return {
            assignments : [
                {id:1, name: 'task1', complete: false},
                {id:2, name: 'task2', complete: false},
                {id:3, name: 'task3', complete: false},
                {id:4, name: 'task4', complete: false},
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress : this.assignments.filter(a=>!a.complete), 
                completed : this.assignments.filter(a=>a.complete), 
            }
            
        }
    }
}