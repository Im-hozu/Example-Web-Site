$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){
    $('#slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true
      });
    }

    //Posts
    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: moment().format('lll'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, nunc quis pulvinar consequat, turpis sapien aliquet neque, in euismod neque orci in enim. Sed sollicitudin tellus sed erat maximus, ac pretium felis efficitur. Suspendisse nec leo vestibulum est semper pulvinar. Vivamus vestibulum quam eu mollis finibus. Cras id turpis scelerisque, tincidunt odio et, ullamcorper mi. Maecenas quis varius lacus. Ut ornare massa pellentesque dui egestas, quis pharetra sem varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eu massa pharetra, tempor velit vitae, venenatis nisi. Duis consequat sem id ante ornare, quis maximus leo hendrerit.'
        },
        {
            title: 'Prueba de titulo 2',
        date: moment().format('lll'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, nunc quis pulvinar consequat, turpis sapien aliquet neque, in euismod neque orci in enim. Sed sollicitudin tellus sed erat maximus, ac pretium felis efficitur. Suspendisse nec leo vestibulum est semper pulvinar. Vivamus vestibulum quam eu mollis finibus. Cras id turpis scelerisque, tincidunt odio et, ullamcorper mi. Maecenas quis varius lacus. Ut ornare massa pellentesque dui egestas, quis pharetra sem varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eu massa pharetra, tempor velit vitae, venenatis nisi. Duis consequat sem id ante ornare, quis maximus leo hendrerit.'},
        {
            title: 'Prueba de titulo 3',
        date: moment().format('lll'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, nunc quis pulvinar consequat, turpis sapien aliquet neque, in euismod neque orci in enim. Sed sollicitudin tellus sed erat maximus, ac pretium felis efficitur. Suspendisse nec leo vestibulum est semper pulvinar. Vivamus vestibulum quam eu mollis finibus. Cras id turpis scelerisque, tincidunt odio et, ullamcorper mi. Maecenas quis varius lacus. Ut ornare massa pellentesque dui egestas, quis pharetra sem varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eu massa pharetra, tempor velit vitae, venenatis nisi. Duis consequat sem id ante ornare, quis maximus leo hendrerit.'},
        {
            title: 'Prueba de titulo 4',
        date: moment().format('lll'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, nunc quis pulvinar consequat, turpis sapien aliquet neque, in euismod neque orci in enim. Sed sollicitudin tellus sed erat maximus, ac pretium felis efficitur. Suspendisse nec leo vestibulum est semper pulvinar. Vivamus vestibulum quam eu mollis finibus. Cras id turpis scelerisque, tincidunt odio et, ullamcorper mi. Maecenas quis varius lacus. Ut ornare massa pellentesque dui egestas, quis pharetra sem varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eu massa pharetra, tempor velit vitae, venenatis nisi. Duis consequat sem id ante ornare, quis maximus leo hendrerit.'
        },
    ];
    posts.forEach((item)=>{
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="boton-mas">Leer más</a>
        </article>
        `;
        $('#posts').append(post);
    })
}


    //Selector de tema - Theme selector
    var theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr('href','css/green.css');
    });
    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css');
    });
    $('#to-red').click(function(){
        theme.attr('href','css/red.css');
    });

    //Scroll arriba de la web - Scroll to web top
    $(".subir").click(function(e){
        e.preventDefault();

        $('html,body').animate({
            scrollTop: 0
        },1000);
        location.reload();
        return false
    });

    //Login falso - Fake login
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name',form_name);
    });

    var form_name = localStorage.getItem('form_name');
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $('#about p');
        about_parrafo.html("</br><strong>Bienvenido, " + form_name+"</strong>");
        about_parrafo.append("</br><a href='#' id='logout'>Cerrar Sesión</a>");
        $("#login").hide();

        $('#logout').click(function() {
           localStorage.clear();
           location.reload();  
        });
    }


    //Acordeon
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    };


    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
            },1000);
        
    }

    //Validación
    if(window.location.href.indexOf('contact') > -1){
       
        $('form input[name="date"]').datepicker({
            dateFormat: 'dd/mm/yy'
        });
       
        $.validate({
            lang: 'es'
        });
    }
    
    


});