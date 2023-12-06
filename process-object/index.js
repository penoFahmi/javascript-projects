// Menentukan penggunaan memori awal
const initialMemoryUsage = process.memoryUsage().heapUsed;

// Mengambil nama dari argumen baris perintah
const yourName = process.argv[2];

// Mengambil nilai dari environment variable NODE_ENV
const environment = process.env.NODE_ENV;

// Proses looping ini akan membuat penggunaan memori naik
for (let i = 0; i <= 10000; i++) {
  // Lakukan sesuatu di dalam loop
}

// Menentukan penggunaan memori setelah proses looping
const currentMemoryUsage = process.memoryUsage().heapUsed;

// Menampilkan pesan ke konsol
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
