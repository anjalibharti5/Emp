<template>
  <div>
    <h1>Employee Dashboard</h1>
    <button @click="fetchEmployees">Show Employees</button>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        {{ employee.name }} - {{ employee.position }}
        <button @click="deleteEmployee(employee.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: []
    };
  },
  methods: {
    fetchEmployees() {
      this.$axios.get('/api/employees')
        .then(response => {
          this.employees = response.data;
        })
        .catch(error => {
          console.error('Error fetching employees', error);
        });
    },
    
    
  }
}
</script>



<!-- <template>
    <div>
      <h1>Employee Dashboard</h1>
      <button @click="fetchEmployees">Show Employees</button>
      
      
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.name }} - {{ employee.position }}
          <button @click="deleteEmployee(employee.id)">Delete</button>
        </li>
      </ul>
     
      <form @submit.prevent="addEmployee">
        <input v-model="newEmployee.name" placeholder="Name">
        <input v-model="newEmployee.position" placeholder="Position">
        <button type="submit">Add Employee</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        employees: [],
        newEmployee: {
          name: '',
          position: ''
        }
      }
    },
    methods: {
      fetchEmployees() {
        this.$axios.get('/api/employees')
          .then(response => {
            this.employees = response.data;
          })
          .catch(error => {
            console.error('Error fetching employees', error);
          });
      },
      addEmployee() {
        this.$axios.post('/api/employees', this.newEmployee)
          .then(response => {
            this.employees.push(response.data);
            this.newEmployee = { name: '', position: '' }; // Reset form
          })
          .catch(error => {
            console.error('Error adding employee', error);
          });
      },
      deleteEmployee(id) {
        this.$axios.delete(`/api/employees/${id}`)
          .then(response => {
            this.employees = this.employees.filter(emp => emp.id !== id);
          })
          .catch(error => {
            console.error('Error deleting employee', error);
          });
      }
    }
  }
  </script>
   -->