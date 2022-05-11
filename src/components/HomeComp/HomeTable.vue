<template>
    <table class="table"> 
        <thead>
            <tr>
                <th scope="col" style="color: white;">#</th>
                <th scope="col" style="color: white;">Model</th>
                <th scope="col" style="color: white;">Horse Power</th>
                <th scope="col" style="color: white;">Price $</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-primary">
                <th scope="row">1</th>
                <!-- <td>{{ model.RS6 }}</td>
                <td>{{ HorsePower.RS6 }}</td>
                <td>{{ price.RS6 }}</td> -->
                <td>RS6</td>
                <td>600</td>
                <td>80000</td>
            </tr>
            <tr class="table-secondary">
                <th scope="row">2</th>
                <!-- <td>{{ models.model }}</td>
                <td>{{ models.HorsePower }}</td>
                <td>{{ models.price }}</td> -->
                <td>RS3</td>
                <td>500</td>
                <td>50000</td>
            </tr>
            <tr class="table-success">
                <th scope="row">3</th>
                <!-- <td>{{ models.model }}</td>
                <td>{{ models.HorsePower }}</td>
                <td>{{ models.price }}</td> -->
                <td>RS7</td>
                <td>700</td>
                <td>60000</td>
            </tr>
            <tr class="table-danger">
                <th scope="row">4</th>
                <!-- <td>{{ models.model }}</td>
                <td>{{ models.HorsePower }}</td>
                <td>{{ models.price }}</td> -->
                <td>RS5</td>
                <td>400</td>
                <td>70000</td>
            </tr>
            <tr class="table-warning">
                <th scope="row">5</th>
                <!-- <td>{{ models.model }}</td>
                <td>{{ models.HorsePower }}</td>
                <td>{{ models.price }}</td> -->
                <td>RS4</td>
                <td>450</td>
                <td>45000</td>
            </tr>
            <tr class="table-info">
                <th scope="row">6</th>
                <!-- <td>{{ models.model }}</td>
                <td>{{ models.HorsePower }}</td>
                <td>{{ models.price }}</td> -->
                <td>RSQ8</td>
                <td>650</td>
                <td>95000</td>
            </tr>
            <tr class="table-light">
                <th scope="row">7</th>
                <!-- <td>{{ models.model }}</td>
                <td>{{ models.HorsePower }}</td>
                <td>{{ models.price }}</td> -->
                <td>S8</td>
                <td>550</td>
                <td>85000</td>
            </tr>
        </tbody>                
    </table>
</template>

<script>
export default {
    name: 'HomeTable',
    data() {
        return {
            models: [
                { model: 'RS6', price: 80000, HorsePower: 600},
                { model: 'RS3', price: 50000, HorsePower: 500},
                { model: 'RS7', price: 60000, HorsePower: 700},
                { model: 'RS5', price: 70000, HorsePower: 400},
                { model: 'RS4', price: 45000, HorsePower: 450},
                { model: 'RSQ8', price: 95000, HorsePower: 650},
                { model: 'S8', price: 85000, HorsePower: 500},
            ],
        }
    }
}
</script>

<style scoped>

</style>