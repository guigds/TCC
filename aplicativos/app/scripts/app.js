'use strict';

/**
 * @ngdoc overview
 * @name aplicativosApp
 * @description
 * # aplicativosApp
 *
 * Main module of the application.
 */
angular
  .module('aplicativosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'homeModule',
    'tarefaModule',
    'directivasModule'
  ])  
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider.state('login',{
      url: "/login",
      templateUrl:'views/login.html',
      controller: ''
    }) 
    .state('template',{
      url: '/tpl',
      templateUrl:'views/templates/template.html'
    })
    .state('template.home',{
      url: '/home',
      templateUrl:'views/home.html',
      controller: 'homeController',
      controllerAs:'ctrl'
    })
    .state('template.tarefas',{
      url: '/tarefas',
      templateUrl:'views/tarefas.html',
      controller: 'tarefaController',
      controllerAs:'ctrl'
    })
    .state('cd_usuario',{
      url: '/cadastra_usuario',
      templateUrl:'views/cadastra_usuario.html',
      controller: 'cadastraUsuarioController',
      controllerAs:'ctrl'
    })
    .state('rp_senha',{
      url: '/recupera_senha',
      templateUrl:'views/recuperar_senha.html',
      controller: 'recuperarSenhaController',
      controllerAs:'ctrl'
    });

  });
