<script setup>
import { useSnackStore } from '~/stores/snack';
let name = ref('')
let email = ref('')
let password = ref()
const snack = useSnackStore();
async function register() {
	
try {
		let res = await fetch(`http://localhost:5000/api/users/register`, {
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name:name.value,
				email: email.value,
				password: password.value,
			}),
			method: 'POST',
		});
		if (!res.ok) {
			snack.error('Authorization failed');
		
			return;
		}
		let json = await res.json();
		console.log(json);
		navigateTo('/login');
} catch (error) {
	alert(error)
}
}

</script>


<template>
<v-container>
	<v-card class="mx-auto mb-10 pt-16 mt-16" max-width="800">
		<v-card-title class="text-blue fw-bold pt-4 text-center">REGISTER</v-card-title>
		<v-card-subtitle class="text-center">Sign in to your account</v-card-subtitle>

		<v-card-text>
			<v-sheet max-width="600" class="mx-auto">
				<v-form validate-on="submit lazy" @submit.prevent ref="form">


					<v-text-field
						prepend-inner-icon="mdi-account"
						v-model="name"
						variant="outlined"
						color="blue"
						hint="enter your name"				
						label="name"
						placeholder="name"
					></v-text-field>



					<v-text-field
						prepend-inner-icon="mdi-account"
						v-model="email"
						variant="outlined"
						color="blue"
						hint="enter your email"				
						label="email"
						placeholder="email"
					></v-text-field>

					<v-text-field
					
						v-model="password"
						variant="outlined"
						color="blue"
						prepend-inner-icon="mdi-lock"
						hint="enter your password"
						label="password"
						placeholder="password"
					></v-text-field>


					<div class="d-flex justify-space-between align-center mb-4">
						
						<NuxtLink to="/login">Click here to Login</NuxtLink>
						<v-btn
							@click="register"
							type="submit"
							color="blue"
							class="px-10 d-block ms-auto text-white bg-theme mt-2"
						>
							Register
						</v-btn>
					</div>
				</v-form>
			</v-sheet>
		</v-card-text>
	</v-card>
</v-container>

</template>

<style scoped>
.box{
  max-width: 600px;
  width: 100%;
  padding: 15px;
}

</style>