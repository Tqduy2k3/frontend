<script setup>
import { ref } from 'vue';
import ContactForm from '@/components/ContactForm.vue';
import contactService from '@/services/contacts.service';
import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
const router = useRouter();
const newContact = ref({
  name: '',
  email: '',
  address: '',
  phone: '',
  favorite: 0,
  avatarFile: null
});

const message = ref('');

const mutation = useMutation({
  mutationFn: async (newContact) => {
    await contactService.createContact(newContact);
  },
  onSuccess: () => {
    message.value = 'Success!';
  },
  onError: (error) => {
    router.push({ 
      name: 'ErrorPage', 
      query: { error: error.message || 'Error when add information' } 
    });
  }
});

async function onAddContact(contact) {
  await mutation.mutateAsync(contact);
}
</script>
<template>
  <div class="page">
    <h4>Thêm liên hệ mới</h4>
    <ContactForm :contact="newContact" @submit:contact="onAddContact" />
    <p>{{ message }}</p>
  </div>
</template>
