function awaitTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function awaitOutput() {
  console.log( "Ready to await." );
  await awaitTimeout(1000);
  console.log( "Await finished." );
}

awaitOutput();