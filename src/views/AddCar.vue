<template>
  <div>
    <h2 class="text-xl font-semibold">Add Car</h2>
    <form @submit.prevent="saveCar" class="mt-4 space-y-4">
      <div v-for="(field, fieldName) in carFields" :key="fieldName" class="flex items-center">
        <label class="w-1/4 text-right">{{ fieldName }}:</label>
        <div class="w-3/4">
          <input v-model="newCar[fieldName]" :type="getFieldType(fieldName)" class="w-full rounded border p-2" />
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";

import { useRouter } from 'vue-router';

const router = useRouter();

const newCar = ref({
  id: '',
  auction_name: '',
  body_style: '',
  car_keys: '',
  color: '',
  cylinders: null,
  doc_type: null,
  location: '',
  drive: null,
  engine_type: '',
  est_retail_value: null,
  est_repair_value: null,
  fuel: '',
  lot_number: null,
  make: '',
  model: '',
  odometer: '',
  seller: '',
  condition: null,
  primary_damage: '',
  secondary_damage: null,
  transmission: '',
  vin: '',
  year: null,
  notes: '',
  car_photos: [],
  sale_status: '',
  date_of_sale: '',
  purchase_price: null,
});

const carFields = {
  "Auction Name": "auction_name",
  "Body Style": "body_style",
  "Car Keys": "car_keys",
  "Color": "color",
  "Cylinders": "cylinders",
  "Doc Type": "doc_type",
  "Location": "location",
  "Drive": "drive",
  "Engine Type": "engine_type",
  "Est. Retail Value": "est_retail_value",
  "Est. Repair Value": "est_repair_value",
  "Fuel": "fuel",
  "Lot Number": "lot_number",
  "Make": "make",
  "Model": "model",
  "Odometer": "odometer",
  "Seller": "seller",
  "Condition": "condition",
  "Primary Damage": "primary_damage",
  "Secondary Damage": "secondary_damage",
  "Transmission": "transmission",
  "VIN": "vin",
  "Year": "year",
  "Notes": "notes",
};

const getFieldType = (fieldName) => {
  // Determine the appropriate input type based on the field name
  if (fieldName === "Year" || fieldName === "Cylinders" || fieldName === "Lot Number") {
    return "number";
  }
  return "text";
};

const saveCar = async () => {
  await axios.post('/api/create', JSON.stringify(newCar.value), {
    headers: {
      'x-api-key': 5604
    }
  })
  await router.push('/admin/car-list');
};
</script>