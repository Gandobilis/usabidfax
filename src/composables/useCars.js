import axios from 'axios';
import { ref } from 'vue';

export default function useCars() {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    const fetchData = async (url) => {
        isLoading.value = true;
        try {
            const response = await axios.get(url);
            data.value = response.data;
            error.value = null;
        } catch (err) {
            data.value = null;
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        data,
        error,
        isLoading,
        fetchData,
    };
}