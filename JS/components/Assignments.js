import AssignmentList from "./AssignmentList.js"
export default {
    components : {AssignmentList},
    template : `
        <assignmentList title="In progress" :status="filters.inProgress"></assignmentList>
        <assignmentList title="Completed" :status="filters.completed"></assignmentList>
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