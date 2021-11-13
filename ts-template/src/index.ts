
function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 3000)
  })
}

const fun = async () => {
  
}
