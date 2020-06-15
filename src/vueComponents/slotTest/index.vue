<template>
    <div>
        <h3>
            {{ name }}
        </h3>
        <slot v-bind:user="user">
            <p>
                {{ user.lastName }}
            </p>
        </slot>
    </div>
</template>
<script>
export default {
    name:'slotTest',
    data() {
        return {
             user:{
                firstName:'姓氏',
                lastName:'名字',
                thirdName:'123'
            }
        }
    },
    props:{
        name:{
            type: String
        }
    }
}
</script>
