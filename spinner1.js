// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//     process.stdout.write('\r|   ',);
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
    
//     process.stdout.write('\r\\   '); 
//   }, 700);
//   setTimeout(() => {
  
//     process.stdout.write('\r\|   '); 
//   }, 700);

  
  let arr = [
    '\r|   ','\r/   ','\r-   ','\r\\   ','\r\|   '
  ];

for (let i = 0; i< arr.length; i++){
    setTimeout(() => process.stdout.write(arr[i]), 500 * i);
} process.stdout.write('\n');


