import $ from "https://cdn.skypack.dev/jquery@3.6.0";
    $(() => {
      console.clear()
      $('.select').each(function() {
        $(`.select[data-id="${$(this).attr('data-id')}"] .selected`).attr('data-id', $(this).attr('data-id'))
      })
        
      $('input[data-suffix]').each(function(i, obj) {
        
        console.log(obj)
        console.log(i)
        console.log($(this).val())
        
        let suffix = '<div data-for="'+$(this).attr('id')+'" data-suffix="'+($(this).attr('data-suffix'))+'" class="sffxhld"><span class="suffixxx" >'+($(this).attr('data-suffix'))+'</span></div>'
        
        $(this).after(suffix)
        SortSuffix($(this))
      })
    }) 
    $('#ucumvA').on('change', function(e) {
      let isChecked = $(this).prop('checked')
      
      if(isChecked === true) {
        $('#ucumvB').prop('disabled', false)
      } else if(isChecked === false) {
        $('#ucumvB').prop('disabled', true)
      }
    })
    $('input[data-suffix]').on('keyup', function(e)  {
      SortSuffix($(this))
    })
    
    $('input[data-suffix]').on('keypress', function(e)  {
      SortSuffix($(this))
    })
    
    $('input[data-suffix]').on('keydown', function(e)  {
      SortSuffix($(this))
    })
    
    function SortSuffix(dis) {
      if(dis === undefined) {
        dis = $(this)
      }
      
      let suffix = dis.attr('data-suffix')
      let val_length = dis.val().length
      let forId = dis.attr('id')
        
      $('.sffxhld[data-suffix="'+suffix+'"][data-for="'+forId+'"]').css('left', `calc(254px + ((1em / 2) * ${val_length}) + (1px *  ${val_length}))`)
    }
    
    $('.selected').on('click', function (e) {
      if(!$(this).attr('data-id')) return console.log(`err: no id`)
      
      $(this).toggleClass('open')
      $(`.select[data-id="${$(this).attr('data-id')}"] .options`).slideToggle(270)
    })

    const numbers = document.querySelector(data-val)
    function numbers() {
      if ( +15) {
        console.log(numbers);
      }
    }














    

    const container = document.querySelector(".container");
const closeBox = document.querySelector(".close-box");
const btnSave = document.querySelector(".btn-save");
const savedBox = document.querySelector(".saved-box");
const select = document.querySelector("select");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");

const settingsP = document.querySelector(".settingsP");
const closeP = document.querySelector(".closeP");
const languageP = document.querySelector(".languageP");
const languagePP = document.querySelector(".languagePP");
const autoplayP = document.querySelector(".autoplayP");
const autoplayPP = document.querySelector(".autoplayPP");
const showP = document.querySelector(".showP");
const showPP = document.querySelector(".showPP");
const btnCancel = document.querySelector(".btn-cancel");
const savedP = document.querySelector(".savedP");


closeBox.addEventListener("click", () =>{
    container.classList.remove("open");
    container.classList.add("close");
    setTimeout(() =>{
        container.classList.remove("close");
        container.classList.add("open");
    }, 1500)
})

select.addEventListener("change", function () {
    const selectedValue = select.value;
  
    if (selectedValue === "IT") {
      settingsP.innerHTML = "Impostazioni";
      closeP.innerHTML = "Chiudi";
      languageP.innerHTML = "Lingua";
      languagePP.innerHTML = "Facci sapere con quale lingua ti senti più a tuo agio. Puoi cambiarla di nuovo in qualsiasi momento.";
      autoplayP.innerHTML = "Video a riproduzione automatica";
      autoplayPP.innerHTML = "Scegli se desideri riprodurre automaticamente nel tuo browser.";
      showP.innerHTML = "Mostra le foto del profilo";  
      showPP.innerHTML = "Scegli se mostrare o meno le foto del profilo degli altri membri.";  
      btnSave.innerHTML = "Salva";
      btnCancel.innerHTML = "Cancella";
      savedP.innerHTML = "Salvato!"
    } else if (selectedValue === "ES") {
        settingsP.innerHTML = "Configuración";
        closeP.innerHTML = "Cerrar";
        languageP.innerHTML = "Idioma";
        languagePP.innerHTML = "Indícanos en qué idioma te sientes más cómodo. Puedes cambiarlo en cualquier momento.";
        autoplayP.innerHTML = "Reproducción automática de videos.";
        autoplayPP.innerHTML = "Elige si deseas reproducir automáticamente los videos en tu navegador.";
        showP.innerHTML = "Mostrar fotos de perfil.";  
        showPP.innerHTML = "Elige si deseas mostrar o no las fotos de perfil de otros miembros.";  
        btnSave.innerHTML = "Guardar";
        btnCancel.innerHTML = "Cancelar"; 
        savedP.innerHTML = "Guardado!"
    } else if (selectedValue === "EN") {
        settingsP.innerHTML = "Settings";
        closeP.innerHTML = "Close";
        languageP.innerHTML = "Language";
        languagePP.innerHTML = "Let us know which language you're most comfortable using. You can change it back at any time.";
        autoplayP.innerHTML = "Autoplay videos.";
        autoplayPP.innerHTML = "Choose if you want to autoplay on your browser.";
        showP.innerHTML = "Show profile photos.";  
        showPP.innerHTML = "Choose whether to show or hide profile photos of other members.";  
        btnSave.innerHTML = "Save";
        btnCancel.innerHTML = "Cancel";
        savedP.innerHTML = "Saved!"
    }
  });  
  
  
  
  
  


btnSave.addEventListener("click", () =>{
    savedBox.style.display = "block";
    setTimeout(()=>{
        savedBox.style.display = "none";
    }, 2000)
})


document.addEventListener("change", function (event) {
  if (event.target.classList.contains("uploadProfileInput")) {
    var triggerInput = event.target;
    var currentImg = triggerInput.closest(".pic-holder").querySelector(".pic")
      .src;
    var holder = triggerInput.closest(".pic-holder");
    var wrapper = triggerInput.closest(".profile-pic-wrapper");

    var alerts = wrapper.querySelectorAll('[role="alert"]');
    alerts.forEach(function (alert) {
      alert.remove();
    });

    triggerInput.blur();
    var files = triggerInput.files || [];
    if (!files.length || !window.FileReader) {
      return;
    }

    if (/^image/.test(files[0].type)) {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onloadend = function () {
        holder.classList.add("uploadInProgress");
        holder.querySelector(".pic").src = this.result;

        var loader = document.createElement("div");
        loader.classList.add("upload-loader");
        loader.innerHTML =
          '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
        holder.appendChild(loader);

        setTimeout(function () {
          holder.classList.remove("uploadInProgress");
          loader.remove();

          var random = Math.random();
          if (random < 0.9) {
            wrapper.innerHTML +=
              '<div class="snackbar show" role="alert"><i class="fa fa-check-circle text-success"></i> Profile image updated successfully</div>';
            triggerInput.value = "";
            setTimeout(function () {
              wrapper.querySelector('[role="alert"]').remove();
            }, 3000);
          } else {
            holder.querySelector(".pic").src = currentImg;
            wrapper.innerHTML +=
              '<div class="snackbar show" role="alert"><i class="fa fa-times-circle text-danger"></i> There is an error while uploading! Please try again later.</div>';
            triggerInput.value = "";
            setTimeout(function () {
              wrapper.querySelector('[role="alert"]').remove();
            }, 3000);
          }
        }, 1500);
      };
    } else {
      wrapper.innerHTML +=
        '<div class="alert alert-danger d-inline-block p-2 small" role="alert">Please choose a valid image.</div>';
      setTimeout(function () {
        var invalidAlert = wrapper.querySelector('[role="alert"]');
        if (invalidAlert) {
          invalidAlert.remove();
        }
      }, 3000);
    }
  }
});