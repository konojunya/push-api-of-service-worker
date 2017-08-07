if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function(registration){
    return registration.pushManager.getSubscription().then(function(subscription){
      if (subscription) {
        return subscription
      }
      return registration.pushManager.subscribe({
        userVisibleOnly: true
      })
    })
  }).then(function(subscription){
    var endpoint = subscription.endpoint
    console.log("pushManager endpoint:", endpoint)
  }).catch(function(error){
    console.warn("serviceWorker error:", error)
  })
}