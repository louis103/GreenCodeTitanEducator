// -----------contact form--------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxI6SpCGT-duRsI-0F3DLJJmnNOXfZtadUlh80WUM6Q1bf61OzW87S2MaFbPc7DOt2edg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
