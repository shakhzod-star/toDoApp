<template>
    <div class="ss">
        <h1 class="mx-4 pt-4"> TodoList  </h1>
    <div class="d-flex pl-4">
  <b-form-input class="mx-4" style="width:500px"  v-model.trim="text" @keyup.enter="Create" placeholder="Enter do list"></b-form-input>
   <b-button @click="Create" :variant=" update ? 'outline-primary' : '' "  > {{update ? 'Update' : 'Create'  }} </b-button>
      <div v-for="(list,index) in lists" :key="index" class="d-flex ml-10 ">
        {{list.name}}
        <div class="d-flex my-2" >
  <b-button variant="success" @click="Edit(list, index)"> Edit </b-button>
    <b-button variant="danger" @click="Delete(index)">Delete</b-button>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    data(){
        return{
            text: null , 
            update: false ,
            editIndex : ''
        }
    },
      computed: {
    ...mapGetters(["lists"]),
  },
  methods:{
    ...mapMutations["SET_LISTS"],
    ...mapActions["ActionLists"],
        Create() {
      if (this.update == true) {
        const action = {
             index: this.editIndex,
          text: this.text,
        };
                this.$store.dispatch("ActionLists", action);
        this.update = false;
      } else {
        if (this.text == null || this.text == "") {
        } 
        else {
          const data = {
            
            name: this.text,
          };
          this.lists.push(data);
        }
      }
      this.text = "";
    },
    Edit(item, index) {
      this.editIndex = index;
      this.text = item.name;
      this.update = true;
    },
    Delete(i) {
      this.lists.splice(i, 1);
      this.update = false;
    },
  }

}
</script>


