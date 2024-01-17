import AssignmentList from "./AssignmentList.js"
import AssingmentCreate from "./AssingmentCreate.js"
export default {
    components : {AssignmentList, AssingmentCreate},
    template : `
        <section class="space-y-6">
            <assignmentList title="In progress" :status="filters.inProgress"></assignmentList>
            <assignmentList title="Completed" :status="filters.completed"></assignmentList>
            <AssingmentCreate @add="add"></AssingmentCreate>
        </section>
    `,

    data() {
        return {
            assignments : [
                {id:1, name: 'task1', complete: false},
                {id:2, name: 'task2', complete: false},
                {id:3, name: 'task3', complete: false},
                {id:4, name: 'task4', complete: false},
            ],

        }
    },

    computed: {
        filters() {
            return {
                inProgress : this.assignments.filter(a=>!a.complete), 
                completed : this.assignments.filter(a=>a.complete), 
            }
            
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                id:1, 
                name: name, 
                complete: false
            });

        }


    }
}