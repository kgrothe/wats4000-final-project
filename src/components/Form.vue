<template>
  <div class="form">
    <div v-show="showForm" class="form-container">
      <h1>Enter a Name and Gender (optional) to start</h1>
      
      <p v-show="showError" class="error">Invalid data entered. Please check that the user name field is filled in and that "male", "female", or "no preference" is chosen for gender.</p>

      <form v-on:submit.prevent="validateForm">    

       <!--User enters name and gender -->
        <p>Choose a name:</p>
        <p><label for="name">
          <input type="text" id="name" v-model="name" placeholder="Enter a name">
          </label>
        </p>

        <p>Choose a gender:</p>
        <p><label for="gender">
          <select v-model="gender">
            <option disabled value="">Please select one</option>
            <option v-for="gender in genderList" v-bind:value="gender" v-bind:key="gender">{{ gender }}</option>
          </select>  
        </label></p>        

        <!-- Submit calls Validate Form Function -->
        <p><input type="submit" value="Submit"></p>
      </form>
    </div>

   <div v-show="!showForm" class="success-message"> 

     <!--Display user entered info-->
      <h1>User Profile information for <strong> {{ name }} </strong></h1>
      <p>NAME: {{ name }}</p>
      <p>GENDER: {{ gender }}</p>


    <!--Display results from API (loop in loop because results in results-? this is not working great)-->
    <ul v-for="results in results">
      <li v-for="item in results">
        <p>Cell:{{ item.cell }}</P>
        <p>Phone:{{ item.phone }}</p>
        <p>Nationality:{{ item.nat }}</P>

        <!-- testing image display <span><img v-bind:src="'https://randomuser.me/api/portraits/men/42.jpg'"></span>  -->      

      </li>
    </ul>   
      
    <!-- Return to blank form -->     
    <p>Create a new User Profile. <router-link to="/#">Click here</router-link></p>

 </div> 
</div>
  
</template>

<script>

import axios from 'axios';

export default {
  name: 'Form',
  data () {
    return {
      
      results: [
        {
          cell: '', 
          phone: '', 
          picture: {}, 
          nat: '',
        }
      ],
 
     name: '',
     gender: '',
     errors: [],       
        
     showForm: true,
     showError: false,

     genderList: [
        'no preference',
        'male',
        'female'
      ],
    }
    
  },
  methods: {
    validateForm: function () {

      if ((this.name!= '') && (this.gender == "male" || this.gender == "female" || this.gender == "no preference")) {  
              
          this.showForm = false;
    
          } else {

          this.showError = true;
        }

      axios.get('https://randomuser.me/api/?inc=gender, cell, phone, nat, picture&noinfo')//, { 
           
      .then ( response=> {
          this.results=response.data;
          console.log(response.data);          
         
        }) 
        .catch ( error=>{
          this.errors.push(error);
        })     

      if (this.gender==='male') {
       this.picture="'https://randomuser.me/api/portraits/men/42.jpg'";
     }
      }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
   color: #42b983; 
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>