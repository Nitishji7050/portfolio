import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



////for cloudflare deployment, for this uncomment below code and comment above code

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     port: 5173,
//     allowedHosts: [
//       'width-usb-grants-miscellaneous.trycloudflare.com'
//     ],
//   },
// });