self.addEventListener("push", function(event){
  event.waitUntil(
    self.registration.showNotification("push api title",{
      body: "push!"
    })
  )
})