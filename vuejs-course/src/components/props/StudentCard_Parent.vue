<template>
    <StudentCard_Child
        :name="student.name"
        :sex="student.sex"
        :score="student.score"
        :grade="student.grade"
        :major="student.major"
    />
</template>

<script setup>
    import StudentCard_Child from "./StudentCard_Child.vue";
    const student = {
        name : "Hak Sengkea",
        sex : "Male",
        score : 98,
        grade : "A",
        major : "CS"
    }
</script>