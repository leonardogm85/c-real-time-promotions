const connection = new signalR.HubConnectionBuilder().withUrl('/PromotionsHub').build();

connection.start().then(function () {
    console.info('Connected!')
}).catch(function (err) {
    console.error(err);
});

const register = document.getElementById('register');

register?.addEventListener('click', function () {
    const company = document.getElementById('company').value;
    const description = document.getElementById('description').value;
    const rule = document.getElementById('rule').value;
    const address = document.getElementById('address').value;

    const promotion = {
        company,
        description,
        rule,
        address
    };

    connection.invoke('Register', promotion).then(function () {
        console.info('Registered Successfully!');
    }).catch(function (err) {
        console.error(err);
    });
});
