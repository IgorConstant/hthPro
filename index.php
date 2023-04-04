<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Conte com a HTH PRO para tornar sua operação mais rentável e sustentável.">
    <meta name="keywords" content="Tratamento para Piscinas, hth, Piscina Limpa, Piscinas Comerciais">
    <meta name="author" content="Igor Henrique Constant - Duetto.ag">
    <title>hth® | PRO</title>

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/main.css">

    <!-- Favicon -->
    <link href="https://hth.com.br/favicon.ico" rel="shortcut icon" type="image/x-icon">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>

    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<body>

    <!-- Header -->
    <header>
        <?php include('pages/header.php') ?>
    </header>

    <!-- Main Block -->
    <main>
        <section id="intro">
            <?php require('pages/intro.php') ?>
        </section>
        <section id="introSolutions">
            <?php require('pages/intro-solutions.php') ?>
        </section>
        <section id="mission">
            <?php require('pages/mission.php') ?>
        </section>
        <section id="cards">
            <?php require('pages/cards.php') ?>
        </section>
        <section id="product">
            <?php require('pages/product.php') ?>
        </section>
        <section id="ctaBlock">
            <?php require('pages/cta-block.php') ?>
        </section>
        <section id="about">
            <?php require('pages/about.php') ?>
        </section>
    </main>

    <footer>
        <?php require('pages/footer.php') ?>
    </footer>


    <!-- JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/c14bc1c0-1a70-4f06-ab7d-7dc2f0cc3a08-loader.js"></script>
    <script src="scripts/form-handler.js"></script>
    <script src="scripts/one-trust.js"></script>

    <script>
        $("#Telefone").mask("(00) 00000-0000");
    </script>

    <script>
        AOS.init();
    </script>
</body>

</html>