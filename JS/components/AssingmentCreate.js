export default {
    template : `
        <form @submit.prevent="add">
            <div class="border border-gray-600">
                <input v-model = "newAssignment" type="text" placeholder="Add new assignment ...." class="text-black p-2"/>
                <button class="bg-white text-black p-2 border-l" type="submit">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment : '',
        }
    },


    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }

}