import { ref, computed, onMounted } from "vue";

const INITIAL_AMOUNT = 1_000_000_000; // 1 000 000 000 $PDR
const amount = ref(500_000_000); // ✅ Здесь вручную задаем сумму (например, 500 млн)

// Вычисляемый процент прогресса
const progressPercentage = computed(() => {
    let percentage = (amount.value / INITIAL_AMOUNT) * 100;
    return percentage > 100 ? 100 : percentage.toFixed(2); // Ограничиваем 100%
});

// Форматируем сумму с разделителями
const formattedAmount = computed(() => `${amount.value.toLocaleString()} $PDR`);

// ✅ Можно изменить значение через JavaScript
const setAmount = (newAmount) => {
    amount.value = newAmount;
};

// ✅ Пример установки значения при загрузке (можно убрать)
onMounted(() => {
    setAmount(750_000_000); // Установим 750 млн при загрузке
});
export { amount, progressPercentage, formattedAmount, setAmount };
