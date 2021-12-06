let arr = [
    '\r|   ','\r/   ','\r-   ','\r\\   ','\r\|   '
  ];

for (let i = 0; i< arr.length; i++){
    setTimeout(() => process.stdout.write(arr[i]), 500 * i);
} process.stdout.write('\n');


