$(document).ready(function(){

    //Slider
    $('#slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true
      });

    //Posts
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
});