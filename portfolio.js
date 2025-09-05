 let msgs =[]
 document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
        let msg =
          {"name" : document.getElementById('contact-name').value ,
            "mail" : document.getElementById('contact-mail').value ,
            "msg" : document.getElementById('contact-msg').value}
            msgs.push(msg)
        console.log(msgs)
      alert('Thank you for reaching out! I will get back to you soon.');
      this.reset();
    });