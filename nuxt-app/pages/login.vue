<template>
   <!-- <form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Username</span>
 Using form state modifiers, the classes can be identical for every input
    <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
</form>
<table>
  <tbody>
    {#each people as person} -->
      <!-- Use a white background for odd rows, and slate-50 for even rows -->
      <!-- <tr class="odd:bg-white even:bg-slate-50">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody>
</table> -->

<div class="py-10 px-6">
  <div class="max-w-sm mx-auto py-10 px-6 bg-gray-100 rounded-xl">
    <h1 class="mb-6 text-2xl">Log in</h1>
    <form>
      <input type="email" placeholder="Your email address..." class="w-full mb-4 py-4 px-6 rounded-xl"></input>
      <input type="password" placeholder="Your password..." class="w-full mb-4 py-4 px-6 rounded-xl"></input>
      <button class="py-4 px-6 bg-teal-700 text-white rounded-xl">Submit</button>
    </form>
    
  </div>
</div>

</template>
  