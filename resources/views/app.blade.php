<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel With React</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
    <div class="flex-center position-ref full-height">
      <div id="app" class="content"></div>
    </div>
    <script type="text/javascript" src="{{ asset('js/manifest.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/vendor.js') }}"></script>
    <!-- <script type="text/javascript" src="{{ mix('js/app.js') }}"></script> -->
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
  </body>
</html>

