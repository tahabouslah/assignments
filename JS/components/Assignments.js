import AssignmentList from "./AssignmentList.js"
export default {
    components : {AssignmentList},
    template : `
        <section class="space-y-6">
            <assignmentList title="In progress" :status="filters.inProgress"></assignmentList>
            <assignmentList title="Completed" :status="filters.completed"></assignmentList>

            <form @submit.prevent="add">
                <div class="border border-gray-600">
                    <input type="text" placeholder="Add new assignment ...." class="text-black p-2"/>
                    <button class="bg-white text-black p-2 border-l" type="submit">Add</button>
                </div>
            </form>

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
    },

    methods: {
        add(e) {
            alert("test");
        }
    }
}