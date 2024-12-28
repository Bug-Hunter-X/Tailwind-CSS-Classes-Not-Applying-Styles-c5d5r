```javascript
// Ensure your tailwind.config.js is correctly configured:
// ...
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//Ensure your main CSS file includes the @tailwind directives
//@tailwind base;
//@tailwind components;
//@tailwind utilities;

// Correct code application in HTML:
<div class="bg-red-500 p-4 rounded-lg">
  <p>This text should have a red background, padding, and rounded corners.</p>
</div>
```